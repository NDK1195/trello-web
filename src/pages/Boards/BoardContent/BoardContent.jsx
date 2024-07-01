import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '../../../utils/sort';
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  // chuot di chuyen 10px moi kich hoat event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
  }, [board]);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      // Lay vi tri cu (tu active)
      const oldIndex = orderedColumns.findIndex(
        column => column._id === active.id
      );

      if (!over) {
        return;
      }

      // Lay vi tri moi (tu over)
      const newIndex = orderedColumns.findIndex(
        column => column._id === over.id
      );

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      // const dndOrderedColumnsIds = dndOrderedColumns.map(column => column._id);

      setOrderedColumns(dndOrderedColumns);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: theme =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          p: '10px 0',
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}
export default BoardContent;
