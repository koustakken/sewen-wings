import { Items } from 'src/components/Table/Table.types'

export const recursivelyDeleteItem = (
  items: Items[],
  idToDelete: number
): Items[] => {
  return items.reduce((acc: Items[], currentItem: Items) => {
    // Проверяем текущий элемент на соответствие idToDelete
    if (currentItem.id === idToDelete) {
      // Если найден элемент для удаления, просто не добавляем его в аккумулятор
    } else {
      // Если текущий элемент не подлежит удалению, добавляем его в аккумулятор
      const updatedItem: Items = {
        ...currentItem,
        // Рекурсивно обрабатываем дочерние элементы
        child: recursivelyDeleteItem(currentItem.child || [], idToDelete),
      }
      acc.push(updatedItem)
    }
    return acc
  }, [])
}
