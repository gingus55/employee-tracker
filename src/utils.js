const generateDepartmentChoices = (departmentsFromDB) => {
  return departmentsFromDB.map((department) => {
    return {
      name: department.dept_name,
      value: department.id,
    };
  });
};

const generateRoleChoices = (rolesFromDB) => {
  return rolesFromDB.map((role) => {
    return {
      name: role.title,
      value: role.id,
    };
  });
};

const generateManagerChoices = (managersFromDB) => {
  return managersFromDB.map((manager) => {
    return {
      name: manager.first_name + " " + manager.last_name,
      value: manager.id,
    };
  });
};

module.exports = {
  generateDepartmentChoices,
  generateRoleChoices,
  generateManagerChoices,
};
