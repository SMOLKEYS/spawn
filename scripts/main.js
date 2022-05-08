const player = Vars.player

global.spawn = (unit, team) => {
    unit.spawn(team, player.x, player.y);
};

global.spawnMany = (unit, team, count) => {
    for(let i = 0; i < count; i++){
        unit.spawn(team, player.x, player.y);
    };
};