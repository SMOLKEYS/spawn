const player = Vars.player

global.spawn = (unit, team) => {
    unit.spawn(team, player.x, player.y);
};