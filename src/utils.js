const generateDepartmentChoices = (departmentsFromDB) => {
  return departmentsFromDB.map((department) => {
    return {
      name: department.dept_name,
      value: department.id,
    };
  });
};

module.exports = {
  generateDepartmentChoices,
};
