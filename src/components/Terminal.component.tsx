import React, { useState, useRef, useEffect } from "react";
import { AVAILABLE_COMMANDS } from "../Utils/terminalCommands";
import { FaTerminal } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { socialLinks } from "@/Utils/socialLinks";
import { projectDetails } from "@/Utils/projectsDetails";

interface Command {
  command: string;
  output: string;
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim().replace(/\s+/g, "");
    let output = "";

    switch (true) {
      case normalizedCmd === "clear":
        setHistory([]);
        return;

      case normalizedCmd in AVAILABLE_COMMANDS:
        output =
          AVAILABLE_COMMANDS[normalizedCmd as keyof typeof AVAILABLE_COMMANDS];
        break;

      case !!socialLinks.find(
        (link) => link.name.toLowerCase().replace(/\s+/g, "") === normalizedCmd
      ):
        const socialLink = socialLinks.find(
          (link) =>
            link.name.toLowerCase().replace(/\s+/g, "") === normalizedCmd
        )!;
        window.open(socialLink.url, "_blank");
        output = `Redirecting to ${socialLink.name}...`;
        break;

      case normalizedCmd === "schedule":
        window.open("https://calendly.com/nsdr2000/30min", "_blank");
        output = "Redirecting to schedule a call...";
        break;

      case normalizedCmd === "email":
        window.open("mailto:nsdr2000@gmail.com", "_blank");
        output = "Redirecting to send an email...";
        break;

      case !!projectDetails.find(
        (project) =>
          project.name.toLowerCase().replace(/\s+/g, "") === normalizedCmd
      ):
        const project = projectDetails.find(
          (project) =>
            project.name.toLowerCase().replace(/\s+/g, "") === normalizedCmd
        )!;
        window.open(project.githubLink, "_blank");
        output = `Redirecting to ${project.name} GitHub page...`;
        break;

      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");

    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 0);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primaryAccent size-8 p-2 rounded-xl items-center justify-center cursor-pointer hidden md:flex"
        aria-label="Open Terminal"
      >
        <FaTerminal size={24} />
      </button>

      {isOpen && (
        <motion.div
          className="fixed bottom-16 right-4 bg-darkBackground w-2/5 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <TerminalHeader onClose={() => setIsOpen(false)} />

          <div
            ref={terminalRef}
            className="p-4 h-96 overflow-y-auto font-mono text-sm bg-secondaryBackground"
          >
            <div className="mb-4 text-green-400">
              Welcome to Terminal. Type &apos;help&apos; for available commands.
            </div>

            {history.map((entry, i) => (
              <TerminalPrompt
                key={i}
                command={entry.command}
                output={entry.output}
              />
            ))}

            <div className="flex items-center">
              <span className="text-green-400">visitor@nikhilduttaroy</span>
              <span className="text-white mx-1">:</span>
              <span className="text-blue-400">~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCommand(input);
                  }
                }}
                className="flex-1 ml-2 bg-transparent outline-none text-green-400"
                autoFocus
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

interface TerminalHeaderProps {
  onClose: () => void;
}

export function TerminalHeader({ onClose }: TerminalHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-primaryBackground">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <button onClick={onClose} className="text-gray-400 hover:text-white">
        <IoClose size={20} />
      </button>
    </div>
  );
}

interface TerminalPromptProps {
  command: string;
  output?: string;
}

export function TerminalPrompt({ command, output }: TerminalPromptProps) {
  return (
    <div className="mb-2">
      <div className="flex items-center">
        <span className="text-green-400">visitor@nikhilduttaroy</span>
        <span className="text-white mx-1">:</span>
        <span className="text-blue-400">~$</span>
        <span className="text-green-400 ml-2">{command}</span>
      </div>
      {output && (
        <div className="mt-1 whitespace-pre-line text-gray-300">{output}</div>
      )}
    </div>
  );
}