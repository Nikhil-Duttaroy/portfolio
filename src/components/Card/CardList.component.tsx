import React from "react";

interface CardListProps<T> {
  items: T[];
  className?: string;
  renderItem: (item: T) => React.ReactNode;
}

const CardList = <T,>({ items, renderItem, className }: CardListProps<T>) => {
  return (
    <div className={`${className} gap-4`}>
      {items.map((item) => renderItem(item))}
    </div>
  );
};

export default CardList;
