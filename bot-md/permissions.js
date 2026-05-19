const ROLE_IDS = {
  autorizado: '1476467289418367158',
  objetivo: '1476467289418367158',
  admin: '983987481961717782',
  mover: '1336825861466488975',
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
  ROLE_IDS,
  hasRole,
  canUseMamut,
  canManagePanel,
  canViewLogs,
  canMoveMembers,
};
