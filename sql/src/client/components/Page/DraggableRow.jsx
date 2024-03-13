import { useDraggable } from '@dnd-kit/core';

function DraggableRow({ id, children, ...props }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <tr ref={setNodeRef} {...listeners} {...attributes} {...props}>
      {children}
    </tr>
  );
}