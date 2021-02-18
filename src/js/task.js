export default function getSpecialAttack({ special }) {
  const result = [];

  Object.values(special).forEach((el) => {
    result.push({
      id: el.id,
      name: el.name,
      description: el.description || 'Описание недоступно',
      icon: el.icon,
    });
  });

  return result;
}
