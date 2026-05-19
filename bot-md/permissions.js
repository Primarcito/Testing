const SERVER_IDS = {
  test: '1343602619477917707',
};

const ROLE_IDS = {
  autorizado: '1473624624964173952',
  objetivo: '1473624624964173952',
  admin: '1473624624964173952',
  mover: '1473624624964173952',
};

function hasRole(member, roleId) {
  return Boolean(member?.roles?.cache?.has(roleId));
}

function canUseMamut(member) {
  return hasRole(member, ROLE_IDS.autorizado);
}

function canManagePanel(member) {
  return hasRole(member, ROLE_IDS.admin);
}

function canViewLogs(member) {
  return hasRole(member, ROLE_IDS.admin);
}

function canMoveMembers(member) {
  return hasRole(member, ROLE_IDS.mover);
}

module.exports = {
  SERVER_IDS,
  ROLE_IDS,
  hasRole,
  canUseMamut,
  canManagePanel,
  canViewLogs,
  canMoveMembers,
};
