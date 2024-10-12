namespace SpriteKind {
    export const Bambu1 = SpriteKind.create()
    export const bambu1_2 = SpriteKind.create()
    export const Fondo1_3 = SpriteKind.create()
    export const Bambu1_3 = SpriteKind.create()
    export const panda_fondo1 = SpriteKind.create()
    export const titulo = SpriteKind.create()
    export const conejo = SpriteKind.create()
    export const conejo2 = SpriteKind.create()
    export const conejo3 = SpriteKind.create()
    export const jefe = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.jefe, function (sprite, otherSprite) {
    ninja.vy = -400
    info.changeLifeBy(-1)
})
function Conejo3 () {
    for (let spawnconejo of tiles.getTilesByType(grafxkid.springGrass)) {
        Conejo_zombie_3 = sprites.create(img`
            ..............................
            ............c...2.............
            ............c...2.............
            ..........222.cc2.............
            ..........cc.cc...............
            .........cc..c................
            .........c2ccc................
            .......ac2f22c................
            .......cc2222c22222...........
            .......7cccccc2c2c2c..........
            ....f..7....cc2c2c2c2.........
            ....ff.7....222c2c2c..........
            .....fff....2.2c2c2...........
            ............2.c.2.c...........
            ..............................
            ..............................
            `, SpriteKind.conejo3)
        tiles.placeOnTile(Conejo_zombie_3, spawnconejo)
        animation.runImageAnimation(
        Conejo_zombie_3,
        [img`
            ..............................
            ............3...2.............
            ............3...2.............
            ..........222.332.............
            ..........33.33...............
            .........33..3................
            .........32333................
            .......a32f223................
            .......332222322222...........
            .......7333333232323..........
            ....f..7....332323232.........
            ....ff.7....22232323..........
            .....fff....2.23232...........
            ............2.3.2.3...........
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............3..2............
            ............223..2............
            ............332332............
            ...........33.33..............
            ...........3233...............
            ........a32f223...............
            .....ff.3322223222222.........
            ......f.7333333232332.........
            .....f..73333223323322........
            .....ff.7..2222332332.........
            ......fff..2..2332332.........
            ...........2..3..2..3.........
            ..............................
            ..............................
            `],
        200,
        true
        )
        Conejo_zombie_3.ay = 1500
        Conejo_zombie_3.follow(ninja, 80)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.conejo2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    pause(randint(5000, 10000))
    Conejo2()
})
function cambiarpantallainicio (myImage: Image) {
    scene.setBackgroundImage(myImage)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    pause(200)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.jefe, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(buey, effects.fire, 500)
    Buey()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direccion = 1
    ninja.setImage(img`
        ....................
        .......fffff........
        ......f77777ff..f...
        .....f22222222ffbf..
        ....f2ffffffff.fbf..
        .....f7dfddfdffbf...
        ....f77777777ffbf...
        ...f2f7777777fbf....
        ....f.ffffffffbf....
        .....f777777fff.....
        ....f77f7777feff....
        ....f11f77771e......
        ....f11555551e......
        .....f5ffff5f.......
        ....f44f..f44f......
        ....ffff..ffff......
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `)
    characterAnimations.loopFrames(
    ninja,
    [img`
        ....fffff............
        ...f77777f...........
        ..f2222222f..........
        .f2ffffffff..........
        f2f77dfddff..........
        f2f7777777f..........
        f2ff77777ff..........
        .fffffffff...........
        .ff777777ff..........
        .f771177711effffffff.
        .fff1177711ebbbbbbbbf
        ..f555555fffffffffff.
        ...f5ff44ff..........
        ...f44ffff...........
        ...ffff..............
        ...f.................
        `,img`
        ....fffff............
        ...f77777f...........
        ..f2222222f..........
        .f2ffffffff..........
        f2f77dfddff..........
        f2f7777777f..........
        f2ff77777ff..........
        .f.ffffff11fffffffff.
        ..f77777711fbbbbbbbff
        ..ff77777fffffffffff.
        ...ff777ff...........
        ..fff5555fff.........
        ..f45ffff44f.........
        ..f4ff.f44f..........
        ..fff..fff...........
        ..ff....ff...........
        `,img`
        .....ffffff..........
        ....ff77777f.........
        ..ff22222222f........
        .f22fffffffff........
        f2fff77dfddff........
        .f..f7777777f........
        ....ff77777ff........
        .....fffffff...9999..
        ....f777777f......99.
        ....ff777711f......9.
        .....f777f11ff.....99
        .....fffffffbbff....9
        .....f44ffffffbbff..9
        .....fffff44f.ffbbf..
        .........ffff...fff..
        .........ffff....f...
        `,img`
        ....ffffff...........
        ..ff777777f..........
        .f222222222f.........
        f2ffffffffff.........
        f2f777dfddff.........
        .2f77777777f.........
        .fff777777ff......ff.
        .ffffffffff.....ffbbf
        .f77777777fff.ffbbff.
        .ff771177711ffbbff...
        ..ff71177711efff.....
        ...f555555ffef.......
        ....ff445ff..f.......
        .....fff44f..........
        .......ffff..........
        .......ffff..........
        `,img`
        ....ffffff...........
        ...f777777f..........
        ..f22222222f.........
        .f2fffffffff......ff.
        f2f777dfddff....ffbbf
        f2f77777777f..ffbbff.
        .fff7777777e.fbbff...
        .fffffffffeeefff.....
        .ff7777777f11ef......
        ..ff117777f11ef......
        ...f117777fff.f......
        ....f55555f..........
        .....f555ff..........
        .....fffff...........
        .....f44f............
        .....ffff............
        `,img`
        ...............f.....
        ....ffffff....fbf...9
        ...f777777f...fbf..9.
        ..f22222222f.fbf...9.
        .f2fffffffff.fbf..9..
        f2f777dfddfffbf...9..
        f2f77777777ffbf...9..
        .fff777777feef...9...
        .fffffffffe11ef..9...
        .f7f777777f11e..9....
        .f11f77777ff.........
        .f11777777f..........
        ..ffffffff...........
        ....ff44f............
        ....f44f.............
        .....ff..............
        `],
    200,
    characterAnimations.rule(Predicate.Moving)
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    sprites.destroy(conejo_Zombie)
    sprites.destroy(Conejo_zombie_2)
    sprites.destroy(Conejo_zombie_3)
    sprites.destroy(buey)
    music.stopAllSounds()
    music.play(music.stringPlayable(music.convertRTTTLToMelody("sf2Balrog:d=4,o=5,b=140:8d#,16f,8f#,16d#,16f,16f#,8a#.,8g#.,8f#,8g#.,8f#.,8f,8d#,32f,32d#,c#,f,f#,g#,8c#6,b,8a#,8g#,a#,8g#,32f#,32g#,16f#,8f,8d#,16f,8f#,16d#,16f,16f#,8a#.,8g#.,8f#,8g#.,8f#.,8f,8d#,32f,32d#,c#"), 180), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`nivel8`)
    tiles.placeOnRandomTile(ninja, sprites.dungeon.collectibleBlueCrystal)
    for (let valor of tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)) {
        tiles.setTileAt(valor, sprites.dungeon.darkGroundCenter)
    }
    dragon()
    Buey()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direccion = 2
    ninja.setImage(img`
        ....................
        .......fffff........
        ......f77777ff..f...
        .....f22222222ffbf..
        ....f2ffffffff.fbf..
        .....f7dfddfdffbf...
        ....f77777777ffbf...
        ...f2f7777777fbf....
        ....f.ffffffffbf....
        .....f777777fff.....
        ....f77f7777feff....
        ....f11f77771e......
        ....f11555551e......
        .....f5ffff5f.......
        ....f44f..f44f......
        ....ffff..ffff......
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `)
    characterAnimations.loopFrames(
    ninja,
    [img`
        ............fffff....
        ...........f77777f...
        ..........f2222222f..
        ..........ffffffff2f.
        ..........ffddfd77f2f
        ..........f7777777f2f
        ..........ff77777ff2f
        ...........fffffffff.
        ..........ff777777ff.
        .ffffffffe117771177f.
        fbbbbbbbbe1177711fff.
        .fffffffffff555555f..
        ..........ff44ff5f...
        ...........ffff44f...
        ..............ffff...
        .................f...
        `,img`
        ............fffff....
        ...........f77777f...
        ..........f2222222f..
        ..........ffffffff2f.
        ..........ffddfd77f2f
        ..........f7777777f2f
        ..........ff77777ff2f
        .fffffffff11ffffff.f.
        ffbbbbbbbf11777777f..
        .fffffffffff77777ff..
        ...........ff777ff...
        .........fff5555fff..
        .........f44ffff54f..
        ..........f44f.ff4f..
        ...........fff..fff..
        ...........ff....ff..
        `,img`
        ..........ffffff.....
        .........f77777ff....
        ........f22222222ff..
        ........fffffffff22f.
        ........ffddfd77fff2f
        ........f7777777f..f.
        ........ff77777ff....
        ..9999...fffffff.....
        .99......f777777f....
        .9......f117777ff....
        99.....ff11f777f.....
        9....ffbbfffffff.....
        9..ffbbffffff44f.....
        ..fbbff.f44fffff.....
        ..fff...ffff.........
        ...f....ffff.........
        `,img`
        ...........ffffff....
        ..........f777777ff..
        .........f222222222f.
        .........ffffffffff2f
        .........ffddfd777f2f
        .........f77777777f2.
        .ff......ff777777fff.
        fbbff.....ffffffffff.
        .ffbbff.fff77777777f.
        ...ffbbff117771177ff.
        .....fffe11777117ff..
        .......feff555555f...
        .......f..ff544ff....
        ..........f44fff.....
        ..........ffff.......
        ..........ffff.......
        `,img`
        .....f...............
        9...fbf....ffffff....
        .9..fbf...f777777f...
        .9...fbf.f22222222f..
        ..9..fbf.fffffffff2f.
        ..9...fbfffddfd777f2f
        ..9...fbff77777777f2f
        ...9...feef777777fff.
        ...9..fe11efffffffff.
        ....9..e11f777777f7f.
        .........ff77777f11f.
        ..........f77777711f.
        ...........ffffffff..
        ............f44ff....
        .............f44f....
        ..............ff.....
        `],
    200,
    characterAnimations.rule(Predicate.Moving)
    )
})
function dragon () {
    for (let spawnfucanlong of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
        fucanlong = sprites.create(img`
            ....................fff......fff...........................ffff
            ..................ff88f..ffff88f..........................fffff
            ................ff888f.ff88888f.........................fffffff
            ...............f888ffff888888f......ffff...............ffffffff
            ..............f8ffff8888888fffffffff888f..............fffffffff
            .............fff888888888ff88888888888f..............ffffffffff
            ..........fff88888888888888888888888ff..............fffffffffff
            .........f888888ffff888888888888888f................ffffffffff2
            ......fffff888f5fff88888888888888ff................f2222ffffff2
            .....f8888888ff5ff88888888888888f.................ff222222ffff2
            .....ff88f88888f888888888888888f..................f2222222ffff2
            .....f888888888ffffff88888ffffffffffffff.........f2222222fffff2
            .....f1ff1f12112f222ff88888888f88888888f........ff222222ffffff2
            .....f1ff1f2f1ff2f22228888888f8888888ff.........f2222222ffffff2
            .....ff.fff2ffff2f22f8888888f88888fff..........ff222222fffffff2
            ..........f2ffff2f2288888888f88fff............ffff2222ffffffff2
            ..........f2ffff2ff8f8888888fff.f.............ffffff22ffffffff2
            ........fff2ffffff8fff88888ff................fffffff2fffffffff2
            .ff.ff.f1f12f1fff8fffff888888f..............ffffffffffffffffff2
            .f1ff1ff1f81f81f8ff8fff8888888f.............fffffffffffffffffff
            ..f1ff188ffffff8fff88fffff88888f............fffffffffffffffffff
            ..f8888888ffffff8f8ff8f333fff888f..........ffffffffffffffffffff
            ..f8888888f8ffff8f88fff333333ffff..........ffffffffffffffffffff
            ..ff888888f8ff..ff88f333333333f.f.........fffffffffffffffffffff
            .f1188888fff......f8f3333333333f..........fffffffffffffffffff2f
            f11ff811f..........ff333333333f8f........ff2ffffffffffffffff22f
            fff.f11f............ff33333333f88f......ff222ffffffffffffff222f
            ....f1f..............f333333333f88f....ff222ffffffffffffff2222f
            ....ff................f33333333f888f..ff222ffffffffffffffff222f
            ......................f33333333f8888f.f222fffffffffffffffff222f
            ......................f333333333f8888ff22ffffffffffffffffff22ff
            ......................f333333333f88888f2fffffffffff2ffffffff2f.
            .....................f3333333333f8888888ffffffffff22ffffffffff.
            ....................f33333333333f8888888ffffffff22222fffffff...
            .................fff3333333333fff8888888fffffff222222ffff......
            ................f88ffff333ffff88ff8888888ffffffffffff..........
            ................f88888ffffff88888f888888f......................
            ................fffffffffffffffffffffffff......................
            `, SpriteKind.jefe)
        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar.setColor(7, 2)
        statusbar.setLabel("HP")
        statusbar.attachToSprite(fucanlong)
        tiles.placeOnTile(fucanlong, spawnfucanlong)
        animation.runImageAnimation(
        fucanlong,
        [img`
            ....................fff......fff...........................ffff
            ..................ff88f..ffff88f..........................fffff
            ................ff888f.ff88888f.........................fffffff
            ...............f888ffff888888f......ffff...............ffffffff
            ..............f8ffff8888888fffffffff888f..............fffffffff
            .............fff888888888ff88888888888f..............ffffffffff
            ..........fff88888888888888888888888ff..............fffffffffff
            .........f888888ffff888888888888888f................ffffffffff2
            ......fffff888f5fff88888888888888ff................f2222ffffff2
            .....f8888888ff5ff88888888888888f.................ff222222ffff2
            .....ff88f88888f888888888888888f..................f2222222ffff2
            .....f888888888ffffff88888ffffffffffffff.........f2222222fffff2
            .....f1ff1f12112f222ff88888888f88888888f........ff222222ffffff2
            .....f1ff1f2f1ff2f22228888888f8888888ff.........f2222222ffffff2
            .....ff.fff2ffff2f22f8888888f88888fff..........ff222222fffffff2
            ..........f2ffff2f2288888888f88fff............ffff2222ffffffff2
            ..........f2ffff2ff8f8888888fff.f.............ffffff22ffffffff2
            ........fff2ffffff8fff88888ff................fffffff2fffffffff2
            .ff.ff.f1f12f1fff8fffff888888f..............ffffffffffffffffff2
            .f1ff1ff1f81f81f8ff8fff8888888f.............fffffffffffffffffff
            ..f1ff188ffffff8fff88fffff88888f............fffffffffffffffffff
            ..f8888888ffffff8f8ff8f333fff888f..........ffffffffffffffffffff
            ..f8888888f8ffff8f88fff333333ffff..........ffffffffffffffffffff
            ..ff888888f8ff..ff88f333333333f.f.........fffffffffffffffffffff
            .f1188888fff......f8f3333333333f..........fffffffffffffffffff2f
            f11ff811f..........ff333333333f8f........ff2ffffffffffffffff22f
            fff.f11f............ff33333333f88f......ff222ffffffffffffff222f
            ....f1f..............f333333333f88f....ff222ffffffffffffff2222f
            ....ff................f33333333f888f..ff222ffffffffffffffff222f
            ......................f33333333f8888f.f222fffffffffffffffff222f
            ......................f333333333f8888ff22ffffffffffffffffff22ff
            ......................f333333333f88888f2fffffffffff2ffffffff2f.
            .....................f3333333333f8888888ffffffffff22ffffffffff.
            ....................f33333333333f8888888ffffffff22222fffffff...
            .................fff3333333333fff8888888fffffff222222ffff......
            ................f88ffff333ffff88ff8888888ffffffffffff..........
            ................f88888ffffff88888f888888f......................
            ................fffffffffffffffffffffffff......................
            `,img`
            .....................fff......fff...........................fff
            ...................ff88f..ffff88f..........................ffff
            .................ff888f.ff88888f.........................ffffff
            ................f888ffff888888f......ffff...............fffffff
            ...............f8ffff8888888fffffffff888f..............ffffffff
            ..............fff888888888ff88888888888f..............fffffffff
            ...........fff88888888888888888888888ff..............ffffffffff
            ..........f888888ffff888888888888888f................ffffffffff
            .......fffff888f5fff88888888888888ff................f2222ffffff
            ......f8888888ff5ff88888888888888f.................ff222222ffff
            ......ff88f88888f888888888888888f..................f2222222ffff
            ......f888888888ffffff88888ffffffffffffff.........f2222222fffff
            ......f1ff1f12112f222ff88888888f88888888f........ff222222ffffff
            ......f1ff1f2f1ff2f22228888888f8888888ff.........f2222222ffffff
            ......ff.fff2ffff2f22f8888888f88888fff..........ff222222fffffff
            ...........f2ffff2f2288888888f88fff............ffff2222ffffffff
            ...........f2ffff2ff8f8888888fff.f.............ffffff22ffffffff
            .........fff2ffffff8fff88888ff................fffffff2fffffffff
            ..ff.ff.f1f12f1fff8fffff888888f..............ffffffffffffffffff
            ..f1ff1ff1f81f81f8ff8fff8888888f.............ffffffffffffffffff
            ...f1ff188ffffff8fff88fffff88888f............ffffffffffffffffff
            ...f8888888ffffff8f8ff8f333fff888f..........fffffffffffffffffff
            ...f8888888f8ffff8f88fff333333ffff..........fffffffffffffffffff
            ...ff888888f8ff..ff88f333333333f.f.........ffffffffffffffffffff
            ..f1188888fff......f8f3333333333f..........fffffffffffffffffff2
            .f11ff811f..........ff333333333f8f........ff2ffffffffffffffff22
            .fff.f11f............ff33333333f88f......ff222ffffffffffffff222
            .....f1f..............f333333333f88f....ff222ffffffffffffff2222
            .....ff................f33333333f888f..ff222ffffffffffffffff222
            .......................f33333333f8888f.f222fffffffffffffffff222
            .......................f333333333f8888ff22ffffffffffffffffff22f
            .......................f333333333f88888f2fffffffffff2ffffffff2f
            ......................f3333333333f8888888ffffffffff22ffffffffff
            .....................f33333333333f8888888ffffffff22222fffffff..
            ..................fff3333333333fff8888888fffffff222222ffff.....
            .................f88ffff333ffff88ff8888888ffffffffffff.........
            .................f88888ffffff88888f888888f.....................
            .................fffffffffffffffffffffffff.....................
            `],
        200,
        true
        )
        tiles.setTileAt(spawnfucanlong, sprites.dungeon.darkGroundCenter)
        fucanlong.ay = 1500
        fucanlong.follow(ninja, 30)
    }
}
scene.onOverlapTile(SpriteKind.conejo, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(conejo_Zombie, effects.fire, 500)
    Conejo()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pantallatituloon == false && botonA == 1) {
        inicio()
        iniciar_juego()
        botonA = 0
        botonB = 0
        Numero_de_saltos = 0
    }
    if (botonA == 0) {
        ninja.vy = -250
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        Numero_de_saltos += 1
        if (direccion == 1) {
            animation.runImageAnimation(
            ninja,
            [img`
                ................f..
                ...............fbf.
                ...............fbf9
                .....fffff....fbf.9
                ....f72222f...fbf.9
                ..ff22fffff..fbf..9
                ..f2ffdfddffffbf..9
                .f2f7777777ffff...9
                .fff7777777ffeff...
                f11ff77777ffede....
                f11ffffffffedde....
                .ff77777777ffe.....
                ..ffff77777ff......
                ...fff777755fff....
                ..fff555555544f....
                ..f455fffff44f.....
                ..f4ff.....ff......
                ..ff...............
                ...................
                ..99.......99......
                `,img`
                .f.................
                f2f................
                .f2ffffff..........
                .f2f77777f.........
                ..f2277777f........
                ..fff22222f........
                ..f77ffffff........
                ..f77dfddff........
                ..ef777777e........
                ..eefffffee........
                .f771177711e.......
                .ff71177711e.......
                ..fff7777eef......9
                ..f55555fefbf....99
                ...f544ffefbf....9.
                ...f44ff...fbf..99.
                ....ff.....fbf.....
                ............fbf....
                ............fbf....
                .............f.....
                `,img`
                ....fffff..........
                ...f77777f.........
                ..f2277777e........
                .f2ff22222e........
                f2f77fffffe........
                f2f77eeddee........
                f2ff77777fe........
                .fffffffff.f.......
                .f71177771ef.......
                .ff1177771efff.....
                ..fff7777fffbbff...
                ...f55555ff.ffbbff.
                ...f444f4f....ffbbf
                ...fffffff......ff.
                ...................
                ...................
                ...................
                ...................
                ...................
                ..99..99...........
                `,img`
                .....fffff.........
                ....f77777f........
                ...f2222222f.......
                ..f2ffffffff......f
                .f2777dfddff....ffb
                .f2f7777777f..ffbbf
                .f2ff77777fe.fbbff.
                ..ffffffff11efff...
                ..f777777711ef.....
                ff7f77777ff.ff.....
                ff1177777fff4f.....
                .f11555555554f.....
                ..ff554fffffff.....
                ....f44f...........
                .....fff...........
                ...................
                ...................
                ...................
                ...................
                .....9999..........
                `],
            100,
            false
            )
        }
        if (direccion == 2) {
            animation.runImageAnimation(
            ninja,
            [img`
                ..f................
                .fbf...............
                9fbf...............
                9.fbf....fffff.....
                9.fbf...f22227f....
                9..fbf..fffff22ff..
                9..fbffffddfdff2f..
                9...ffff7777777f2f.
                ...ffeff7777777fff.
                ....edeff77777ff11f
                ....eddeffffffff11f
                .....eff77777777ff.
                ......ff77777ffff..
                ....fff557777fff...
                ....f445555555fff..
                .....f44fffff554f..
                ......ff.....ff4f..
                ...............ff..
                ...................
                ......99.......99..
                `,img`
                .................f.
                ................f2f
                ..........ffffff2f.
                .........f77777f2f.
                ........f7777722f..
                ........f22222fff..
                ........ffffff77f..
                ........ffddfd77f..
                ........e777777fe..
                ........eefffffee..
                .......e117771177f.
                .......e11777117ff.
                9......fee7777fff..
                99....fbfef55555f..
                .9....fbfeff445f...
                .99..fbf...ff44f...
                .....fbf.....ff....
                ....fbf............
                ....fbf............
                .....f.............
                `,img`
                ..........fffff....
                .........f77777f...
                ........e7777722f..
                ........e22222ff2f.
                ........efffff77f2f
                ........eeddee77f2f
                ........ef77777ff2f
                .......f.fffffffff.
                .......fe17777117f.
                .....fffe1777711ff.
                ...ffbbfff7777fff..
                .ffbbff.ff55555f...
                fbbff....f4f444f...
                .ff......fffffff...
                ...................
                ...................
                ...................
                ...................
                ...................
                ...........99..99..
                `,img`
                .........fffff.....
                ........f77777f....
                .......f2222222f...
                f......ffffffff2f..
                bff....ffddfd7772f.
                fbbff..f7777777f2f.
                .ffbbf.ef77777ff2f.
                ...fffe11ffffffff..
                .....fe117777777f..
                .....ff.ff77777f7ff
                .....f4fff7777711ff
                .....f45555555511f.
                .....fffffff455ff..
                ...........f44f....
                ...........fff.....
                ...................
                ...................
                ...................
                ...................
                ..........9999.....
                `],
            100,
            false
            )
        }
        if (ninja.isHittingTile(CollisionDirection.Bottom) || (ninja.isHittingTile(CollisionDirection.Right) || ninja.isHittingTile(CollisionDirection.Left))) {
            Numero_de_saltos = 0
        }
        if (Numero_de_saltos >= 2) {
            ninja.vy = 100
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (botonB == 0) {
        if (direccion == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . f . . 
                . . . . . . . . . . . f f f . . 
                . . . . . . . . . f f f . . . . 
                . . . . . . . . f f . . . f f . 
                . . . . . . . f f . . . f f . . 
                . . . . . . f f . . . f f . . . 
                . . . . . . f . . . f f . . . . 
                . . . . . f . . . . f . . . . . 
                . . . f f . . . . f . . . . . . 
                . . . f . . . f f f . . . . . . 
                . . . . . . f f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ninja, 300, 0)
            animation.runImageAnimation(
            ninja,
            [img`
                ...ffffff.f............
                ...f77777fbf...........
                ..f2222222ff...........
                .f2777dfddff...........
                f2f77777777f...........
                f2f77777777f...........
                f2ff777777ff...........
                .ffffffffffff..........
                .ff777777fff....2222222
                .f771177712222222444442
                .fff1177712224444444442
                ...f55555ff.4422224422.
                ...f77ff77f............
                ...f44f.f44f...........
                ...ffff.ffff...........
                .......................
                .......................
                `,img`
                .......................
                .......................
                ....fffff..............
                ...f77777f.............
                ..f2222222f............
                .f2ffffffff............
                f2f77dfddff............
                f2f7777777f......222222
                f2ef77777fe....f2244442
                .feeffffeeeeeeefffffff4
                .e777777777711ef333333f
                .e71177777ff11efffffff4
                .e7117777feeeeef2242222
                ..ee555555e......222.2.
                ..e55eee55e............
                ..e44e.e44e............
                ..eeee.eeee............
                `,img`
                ...f...................
                ...f...................
                ..fbfffff..............
                ..ff77777f.............
                ..f2222222f............
                ..f277dfddf............
                .f2f777777f............
                .f2f777777f............
                .f2e77777fe...222222222
                .feefffffeeeee444444442
                .ef7777777711e555555542
                .ef777777ff11e444444442
                .ef77777feeeee222222222
                ..e555555e.............
                .e55eee55e.............
                e44e..e44e.............
                eeee..eeee.............
                `],
            100,
            false
            )
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            pause(100)
            sprites.destroy(projectile)
        }
        if (direccion == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . f f f . . . . . . . . . . . 
                . . . . f f f . . . . . . . . . 
                . f f . . . f f . . . . . . . . 
                . . f f . . . f f . . . . . . . 
                . . . f f . . . f f . . . . . . 
                . . . . f f . . . f . . . . . . 
                . . . . . f . . . . f . . . . . 
                . . . . . . f . . . . f f . . . 
                . . . . . . f f f . . . f . . . 
                . . . . . . . . f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, ninja, -300, 0)
            animation.runImageAnimation(
            ninja,
            [img`
                ............f.ffffff...
                ...........fbf77777f...
                ...........ff2222222f..
                ...........ffddfd7772f.
                ...........f77777777f2f
                ...........f77777777f2f
                ...........ff777777ff2f
                ..........ffffffffffff.
                2222222....fff777777ff.
                244444222222217771177f.
                2444444444222177711fff.
                .2244222244.ff55555f...
                ............f77ff77f...
                ...........f44f.f44f...
                ...........ffff.ffff...
                .......................
                .......................
                `,img`
                .......................
                .......................
                ..............fffff....
                .............f77777f...
                ............f2222222f..
                ............ffffffff2f.
                ............ffddfd77f2f
                222222......f7777777f2f
                2444422f....ef77777fe2f
                4fffffffeeeeeeeffffeef.
                f333333fe117777777777e.
                4fffffffe11ff77777117e.
                2222422feeeeef7777117e.
                .2.222......e555555ee..
                ............e55eee55e..
                ............e44e.e44e..
                ............eeee.eeee..
                `,img`
                ...................f...
                ...................f...
                ..............fffffbf..
                .............f77777ff..
                ............f2222222f..
                ............fddfd772f..
                ............f777777f2f.
                ............f777777f2f.
                222222222...ef77777e2f.
                244444444eeeeefffffeef.
                245555555e1177777777fe.
                244444444e11ff777777fe.
                222222222eeeeef77777fe.
                .............e555555e..
                .............e55eee55e.
                .............e44e..e44e
                .............eeee..eeee
                `],
            100,
            false
            )
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
function iniciar_juego () {
    music.stopAllSounds()
    info.setLife(3)
    info.setScore(0)
    ninja = sprites.create(img`
        ....................
        .......fffff........
        ......f77777ff..f...
        .....f22222222ffbf..
        ....f2ffffffff.fbf..
        .....f7dfddfdffbf...
        ....f77777777ffbf...
        ...f2f7777777fbf....
        ....f.ffffffffbf....
        .....f777777fff.....
        ....f77f7777feff....
        ....f11f77771e......
        ....f11555551e......
        .....f5ffff5f.......
        ....f44f..f44f......
        ....ffff..ffff......
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Player)
    controller.moveSprite(ninja, 100, 0)
    characterAnimations.loopFrames(
    ninja,
    [img`
        . . . . f f f f f . . . . . 
        . . . f 7 7 7 7 7 f f . . f 
        . . f 2 2 2 2 2 2 2 2 f f b 
        . f 2 f f f f f f f f . f b 
        . . f 7 d f d d f d f f b f 
        . f 7 7 7 7 7 7 7 7 f f b f 
        f 2 f 7 7 7 7 7 7 7 f b f . 
        . f . f f f f f f f f b f . 
        . . f 7 7 7 7 7 7 f f f . . 
        . f 7 7 f 7 7 7 7 f e f f . 
        . f 1 1 f 7 7 7 7 1 e . . . 
        . f 1 1 5 5 5 5 5 1 e . . . 
        . . f 5 f f f f 5 f . . . . 
        . f 4 4 f . . f 4 4 f . . . 
        . f f f f . . f f f f . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . . f 7 7 7 7 7 f f . . f 
        . . f 2 2 2 2 2 2 2 2 f f b 
        . f 2 f f f f f f f f . f b 
        . . f 7 d f d d f d f f b f 
        . f 7 7 7 7 7 7 7 7 f f b f 
        f 2 f 7 7 7 7 7 7 7 f b f . 
        . f . f f f f f f f f b f . 
        . . f 7 7 7 7 7 7 f f f . . 
        . f 7 7 f 7 7 7 7 f e f f . 
        . f 1 1 f 7 7 7 7 1 e . . . 
        . f 1 1 5 5 5 5 5 1 e . . . 
        . . f 5 f f f f 5 f . . . . 
        . . f 5 f . . f 5 f . . . . 
        . f 4 4 f . . f 4 4 f . . . 
        . f f f f . . f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . . f 7 7 7 7 7 f f . . f 
        . . f 2 2 2 2 2 2 2 2 f f b 
        . f 2 f f f f f f f f f f b 
        . . f 7 d f d d f d f f b f 
        . f 7 7 7 7 7 7 7 7 f f b f 
        f 2 f 7 7 7 7 7 7 7 f b f . 
        . f 7 f f f f f f f f b f . 
        . f 7 f 7 7 7 7 7 f f f f . 
        . f 1 1 f 7 7 7 7 1 e . . . 
        . f 1 1 f 7 7 7 7 1 e . . . 
        . . f 5 5 5 5 5 5 f . . . . 
        . . f 5 f f f f 5 f . . . . 
        . f 4 4 f . . f 4 4 f . . . 
        . f f f f . . f f f f . . . 
        . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . . f 7 7 7 7 7 f f . . f 
        . . f 2 2 2 2 2 2 2 2 f f b 
        . f 2 f f f f f f f f . f b 
        . . f 7 d f d d f d f f b f 
        . f 7 7 7 7 7 7 7 7 f f b f 
        f 2 f 7 7 7 7 7 7 7 f b f . 
        . f . f f f f f f f f b f . 
        . . f 7 7 7 7 7 7 e f f . . 
        . f 7 7 f 7 7 7 7 f e f f . 
        . f 1 1 f 7 7 7 7 1 e . . . 
        . f 1 1 5 5 5 5 5 1 e . . . 
        . . f 5 f f f f 5 f . . . . 
        . f 4 4 f . . f 4 4 f . . . 
        . f f f f . . f f f f . . . 
        . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving)
    )
    ninja.setPosition(14, 106)
    tiles.setCurrentTilemap(tilemap`nivel5`)
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661ddd6666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111116666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111166666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111111111111111111666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111111116666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111111111111111111111111111111111111d6666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111111111111111ddd666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111d1111111111111111dddddd66666dddd
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666111111dddd11111111111111111111111111111111111111111111dd1111111ddddddddddddd1
        6666666666666666666666666666666666666666666666666666666666666666666666666666666dd111111ddd111111111111111111111111111d11111111dd111dd11111111111111111111dddd111
        666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111d111d1111ddddddddd111111111ddddd111ddddddddd11111
        66666666666666666666666666666666666666666666666666666666666666666666911111111111111d1111111111dddddd11111dddd1ddddddddddddddddddddd1111dd111111111ddddddd1111111
        666666611111d66666666666666666666666666666666666666666666d1111111111d111d11111111111111111111111dddd1111dddddddddddddddddddddddddd111111111111dddddddddd11111111
        66666111111111166666666666666666666666666666666dd1111dddd11111111111ddddd11111111111111111111111111111ddddddddddddddddddddddddddd111111dddddddddddddddd11111111b
        666111111111111111666666666666666666666dd111111d11111ddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddd11ddddddddddddddddd11111bbbbbb
        1ddd1dd11111ddd1111111666666666dd11111111111111dddddddddddd11111111ddddddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddd11111bbbbbbbb
        ddddddddd11dddddd11111111111dd1111111111dddddddddddddd1111111111111111ddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddbbb1bbbbbbbbbbb
        dddddddddddddddddddddd1111111d1dddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb
        111111ddddddddddddddddddddddddddddddddddddddb111111111111111111111111111111111dddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb
        1111111111dddddddddddddddddddddddddddddddb111111111111111111111111111111111b1111ddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11b
        1111111111111dddddddddddddddddddddddddb1111111111111111111111bbb11111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb1111111
        1111111bbb111111ddddddddddddddddddddbb1111111111111111bbbbbb111bb111111111111111111111bbbddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb1111111111111
        bbbb111bbbbbb11111ddddddddddddddbbb11111111b111bbb11bbbbbbbbb1bbbbbbbbb1111bb1111b111111111bbddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb111111111111111
        bbbbbbbbbbbbbbbb1111bddddddbbbbbbbb1111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111b1111111bbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11111111111111111
        bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbc1111111111111111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111111c11
        bbbbbbbb1b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc11111111111111111111111111
        bbbbb11111111111b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc11111111111c11111111111111111111
        bbb11111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc11111111111c11111c111111cc11c11111c
        bb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111ccccccccccc1111c111c11111111c1111cccc11cc11111c
        bb11111111111111111111111111bb1bbbbbbbbbbbbbbbcc1111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111ccccccccccccc11111111c111c1111cccc11cc111111c
        b11111c1111111111111111111111c1111111bbbc111111111111111111111cc111111cbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111cc1ccccccccc11111cccccc111111ccccc11ccc11111cc
        b1111ccc1111111111111111111111cc111111ccccccccc111111111111111ccccccc11111cbbbbbbbbbbbbbbbbbbbbc111111cc11111111ccccccccccccccc1cccccccc11c111ccccc111cc11111ccc
        1111dccc111111111111111111111111cccc11cccccccccc11111cccccccccccccccccc111111cccccbbbbbbcccccccccccccc111111ccccccccccccccccccccccccccc111111ccccccc1ccc11111ccc
        1cccc1111111111111111111c111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccccccccccc
        cccc11111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccc
        ccc111111111111111111111111111111c111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        11c11111c11111c1c1111cc1111111c111c11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        1111111ccc111cc1cc111cc111111111111cc111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        111c11ccc1111cc1cc11ccccc111ccc11111cccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        11cccccccc11cc11cc11cccccc111ccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccc1ccc11ccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccc1cccc1cccccccc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6cccccccccccccccccccc
        cccccccccccccccccccccccccc66cccccccccccccccc6ccccccccccccccccccccccccccccccccccccccccccc666c6cccccccccccc66666ccccccccccccccccc6ccccccc6ccc66ccccc6ccccccccccccc
        6cc6c6666c6c6666c666cc66c666666666666666c666666cccc6666c66666666666666666666666cc6666666666666666666666666666666666666666666666666666cc666666666666666666666c666
        666666666666666666666666e6666666666666666666ee6666666666666666666666666666666666666666eeeee6ee66666666666eeeee66666e66e66ee6666666e666e66666666eeee6666e66666666
        6666e66e6e6ee666e66666666666666666ee6666666eee6666666eeee66eee66eee66666eee66eee666666ee66ee66eeeee76eeee6e66ee66666666eeee66e66666666e666666666eeeee6666ee66666
        666e666666666666666e666666666666668888888888888888888888888888888888888888888888888888888888888888886ee666e66ee66666666eee666eeee6eee66666666666ee6e666ee6666666
        6666666e66666eee66666666688888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888868888888e6666666666666e666e
        66666666666666e66666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e666666666e
        66666666666666666ee66668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e66666e66e
        66666666666e6666666666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e666666
        6666e66ee666666ee6e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666e666
        666666666666ee8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888666666e
        66e6666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666
        6e6666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666
        6e666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866e
        66666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
        6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
        6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
        66e6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
        ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66
        666e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
        66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668e66ee
        ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e66
        e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666ee666
        e666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888886886666666666
        666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888886667666666e666
        6666668868886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666866e666666eee66666
        66e666e666886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666ee666e666666666
        66e6666666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666
        6666666666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866eee666666e66666666666666
        e66666e66666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888686e666e6666e666e66666666666
        ee66666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666ee666e666e66666666666
        666666666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886686ee666e6666e666e6666e6e66e
        6666666666e66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e666eee6666666e6e6666666
        6666666666e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886e66666eee66ee6666666e6666666
        e66e66666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666eee6666eee666666
        e66666e6666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666666ee666ee6666
        66666e666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666e666666666
        666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e
        e6e6668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
        6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886
        6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    scene.cameraFollowSprite(ninja)
    music.play(music.stringPlayable(music.convertRTTTLToMelody("mslug:d=4,o=5,b=63:32f,32c,32a#,32d#,8d#.6,32d6,32d#6,32d6,32c6,32a#,32d6,16c.6,32f,f.,32g#,32d#,32c#6,32f#,8f#.6,32f7,32f#6,32f6,32d#6,32c#6,32f6,16d#6,16d6,16d#6,g#6,16g#,16g#,16a#,8b.,32a#,32g#,8a#,8d#,8a.,32g#,32f#,8g#,8c#,8g#.,32f#,32e,8c#,8d#,8e,2d#"), 63), music.PlaybackMode.LoopingInBackground)
    ninja.ay = 1000
    Conejo()
    Conejo2()
    Conejo3()
    Buey()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.conejo3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    pause(randint(5000, 10000))
    Conejo3()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo())
    music.stopAllSounds()
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.conejo2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    pause(randint(5000, 10000))
    Conejo2()
})
scene.onOverlapTile(SpriteKind.conejo3, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(Conejo_zombie_3, effects.fire, 500)
    Conejo3()
})
function inicio () {
    effects.clouds.endScreenEffect()
    for (let valor2 of sprites.allOfKind(SpriteKind.titulo)) {
        sprites.destroy(valor2)
    }
    scene.setBackgroundColor(1)
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999991111999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999
        9999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999
        9991111111111999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999
        9911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111119999999999999999999911119999999999999999999999999999999999991111111111111111111199999999999999999999111199999999999999999999999999999999999911
        1111111111111111111199999999999999991111111199999999999999999999999999999999111111111111111111111111999999999999999911111111999999999999999999999999999999991111
        1111111111111111111119999999999999911111111119999999999999999999999999999991111111111111111111111111199999999999999111111111199999999999999999999999999999911111
        1111111111111111111111999999999999111111111111999999999999999999999999999911111111111111111111111111119999999999991111111111119999999999999999999999999999111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111111199991111111111111111111199991111999999999999111111111111111111111111111111111111999911111111111111111111999911119999999999991111111111
        1111111111111111111111111111111111111111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111111111199999999111111111111
        1111111111111111111111111111111111111111111111111111111111111999999111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111
        1111111111111111111111111111111111111111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111111111111999911111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1199991111111111119999111111111111999911111111111199991111111111119999111111111111999911111111111199991111111111119999111111111111999911111111111199991111111111
        9999999911111111999999991111111199999999111111119999999911111111999999991111111199999999111111119999999911111111999999991111111199999999111111119999999911111111
        9999999999111199999999999911119999999999991111999999999999111199999999999911119999999999991111999999999999111199999999999911119999999999991111999999999999111199
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999666699999999999966669999999999996666999999999999666699999999999966669999999999996666999999999999666699999999999966669999999999996666999999999999666699
        9999999966666666999999996666666699999999666666669999999966666666999999996666666699999999666666669999999966666666999999996666666699999999666666669999999966666666
        6699996666666666669999666666666666999966666666666699996666666666669999666666666666999966666666666699996666666666669999666666666666999966666666666699996666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6668866666688666666886666668866666688666666886666668866666688666666886666668866666688666666886666668866666688666666886666668866666688666666886666668866666688666
        8688886886888868868888688688886886888868868888688688886886888868868888688688886886888868868888688688886886888868868888688688886886888868868888688688886886888868
        6888888668888886688888866888888668888886688888866888888668888886688888866888888668888886688888866888888668888886688888866888888668888886688888866888888668888886
        6687786666877866668778666687786666877866668888666687786666877866668778666687786666877866668778666687786666877866668778666687786666877866668778666687786666877866
        6677776666777766667777666677776666777766668888666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766
        6677776666777766667777666677776666777766666886666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766
        6766667667666676676666766766667667666676666886666766667667666676676666766766667667666676676666766766667667666676676666766766667667666676676666766766667667666676
        6777777667777776677777766777777667777776666886666777777667777776677777766777777667777776677777766777777667777776677777766777777667777776677777766777777667777776
        667777666677776666777766667777666677776666ecce666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766667777666677776666777766
        4ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ecccce44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee44ee4
        488dd884488dd884488dd884488dd884488dd88448cccc84488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884488dd884
        666dd666666dd666666dd666666dd666666dd666666cc666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666666dd666
        7666666776666667766666677666666776666667766667777666666776666667766666677666666776666667766666677666666776666667766666677666666776666667766666677666666776666667
        7777777777777777777777777777777777777777669997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        6666666666666666666666666666666666666666699996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777777777777777777999999999777777777777777777777777777777777777777777777777777777777777777799999999997777777777777777777777777777777777777777777777777777777
        7777777777777777777777799999977777777777777777777777777777777777777777777777777777777777777777777999999977777777777777777777777777777777777777777777777777777777
        7776677777777777777777799999777777777777777777777777777777777777777777777777777777777777777667777799999977777777777777777777777777777777777777777777777777777777
        7766667777777777777777699997777777777777777777777777777777777777777777777777777777777777776666777779999967777777777777777777777777777777777777777777777777777777
        7766667777767777777777699997777777777777777677777777777777777777777677777777777777767777776666777777999966677777777777777777777777777777777677777777777777767777
        7688886776767677777776999977777777777777767676777777777777777777767676777777777776767677768888677777799996666666666666666666666666777777767676777777777776767677
        7666666777777777777776999977777777777777777777777777777777777777777777777777777777777777766666677777779999966666666666666666666666667777777777777777777777777777
        7766667777777777777769999777777777777777777777777777777777777777777777777777777777777777776666777777777799999999999999999999999999666777777777777777777777777777
        7774477777777777777769999777777777777777777777777777777777777777777777777777777777777777777447777777777777777777777777777777777999996777777777777777777777777777
        776dd67777777777777699997777777777777777777777777777777777777777777777777777777777777777776dd6777777777777777777777777777777777779999677777777777777777777777777
        766dd66777777777777699997777777777777777777777777776677777777777777777777777777777777777766dd6677777777777777777777777777776677777999677777777777777777777766777
        77666677777777711d11d11d1177777777777777777777777766667777777777777777777777777777777777776666777777777777777777777777777766667777799967777777777777777777666677
        7777777777777711d11d11d11d77777777767777777777777766667777777777777677777777777777777777777777777776777777777777777677777766667777799967777777777776777777666677
        77777777777777ddddddddddd677777776767677777777777688886777777777767676777777777777777777777777777676767777777777767676777688886777779996777777777676767776888867
        7777777777777766666666666777777777777777777777777666666777777777777777777777777777777777777777777777777777777777777777777666666777779996777777777777777776666667
        7777777777777777699997777777777777777777777777777766667777777777777777777777777777777777777777777777777777777777777777777766667777777999677777777777777777666677
        7777777777777777699997777777777777777777777777777774477777777777777777777777777777777777777777777777777777777777777777777774477777777999677777777777777777744777
        777777777777777699997777777777777777777777777777776dd6777777777777777777777777777777777777777777777777777777777777777777776dd677777777999677777777777777776dd677
        777777777777777699997777777777777777777777777777766dd6677777777777777777777777777777777777777777777777777777777777777777766dd667777777999677777777777777766dd667
        7777677777776769999767777777677777776777777767777766667777776777777767777777677777776777777767777777677777776777777767777766667777776779996767777777677777666677
        6777767767777669699776776777767767777677677776776777767767777677677776776777767767777677677776776777767767777677677776776777767767777679696776776777767767777677
        7676767676767696967676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676969676767676767676767676
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    game.setDialogFrame(img`
        222222222222222222222222
        222222222222222223332222
        225533333233333333333222
        255533333333333333333322
        235533333333333333333322
        233333333333333333333322
        233333333333333333333322
        233333333333333333333322
        233333333333333333333322
        233333333333333333333322
        223333333333333333333332
        223333333333333333333332
        233333333333333333333332
        233333333333333333333332
        233333333333333333333322
        233333333333333333333322
        233333333333333333333332
        233333333333333333333332
        233333333333333333333332
        223333333333333333333332
        223333333333333333333332
        233333333333333333333332
        233333333333333333333332
        223333333333333333333332
        `)
    game.setDialogCursor(img`
        . . . . . f f f f f f f f . . . 
        . . . . f 7 7 7 7 7 7 7 7 f . . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . f f 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f 2 f f f f f f f f f f f f . 
        f 2 2 7 d d f d d d d f d 7 f . 
        2 f f 7 d d f d d d d f d 7 f . 
        f f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . . f f f f f f f f f f f . . 
        `)
    game.showLongText("Bienvenidos al juego fucanlong", DialogLayout.Center)
    game.showLongText("les voy acontar su historia", DialogLayout.Center)
    game.showLongText("en la lejanas tierras de china", DialogLayout.Center)
    game.showLongText("en un museo un, antiguo horoscopo", DialogLayout.Center)
    game.showLongText("se quebro, de ahi salio un dragon", DialogLayout.Center)
    game.showLongText("llamado fucanlong muy furioso", DialogLayout.Center)
    game.showLongText("con unos maleficos secuaces", DialogLayout.Center)
    game.showLongText("y convierte a las personas de china en bambu", DialogLayout.Center)
    game.showLongText("pero,tu no tienes la maldicion", DialogLayout.Center)
    game.showLongText("porque llegaste despues de la aparicon del dragon", DialogLayout.Center)
    game.showLongText("te conviertes en un ninja", DialogLayout.Center)
    game.showLongText("y debes salvar a toda china", DialogLayout.Center)
    game.showLongText("ademas preguntar al dragon", DialogLayout.Center)
    game.showLongText("porque esta furioso.", DialogLayout.Center)
    game.showLongText("Estos son los enemigos:", DialogLayout.Center)
    conejo_Zombie = sprites.create(img`
        11bbbbbbbbbbbbbbbbbbbbbbbbbb11
        1bbbbbbbbbbbbbbcbbbb22bbbbbbb1
        bbbbbbbbbbbbbbbcbbbb22bbbbbbbb
        bbbbbbbbbbbbbbbcbbbb22bbbbbbbb
        bbbbbbbbbbbbbbbcbbbb22bbbbbbbb
        bbbbbbbbbbbb2222bbcc22bbbbbbbb
        bbbbbbbbbbbb2222bbcc22bbbbbbbb
        bbbbbbbbbbbbcccbcccbbbbbbbbbbb
        bbbbbbbbbbbcccbbccbbbbbbbbbbbb
        bbbbbbbbbbbcccbbccbbbbbbbbbbbb
        bbbbbbbbbbbc22ccccbbbbbbbbbbbb
        bbbbbbbbbbbc22ccccbbbbbbbbbbbb
        bbbbbbbbaac2ff22ccbbbbbbbbbbbb
        bbbbbbbbaac2ff22ccbbbbbbbbbbbb
        bbbbbbbbccc22222cc222222bbbbbb
        bbbbbbbbccc22222cc222222bbbbbb
        bbbbbbbb77cccccccc2c22c2ccbbbb
        bbbbffbb77bbbbbccc2c22c2cc2bbb
        bbbbffbb77bbbbbccc2c22c2cc2bbb
        bbbbfffb77bbbbb2222c22c2ccbbbb
        bbbbfffb77bbbbb2222c22c2ccbbbb
        bbbbbbffffbbbbb2bb2c22c2bbbbbb
        bbbbbbffffbbbbb2bb2c22c2bbbbbb
        bbbbbbbbbbbbbbb2bbcb22bcbbbbbb
        bbbbbbbbbbbbbbb2bbcb22bcbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1bbbbbbbbbbbbbbbbbbbbbbbbbbbb1
        11bbbbbbbbbbbbbbbbbbbbbbbbbb11
        `, SpriteKind.Enemy)
    conejo_Zombie.setPosition(78, 51)
    game.showLongText("este conejo es un enemigo", DialogLayout.Bottom)
    game.showLongText("que ataca lentamente", DialogLayout.Bottom)
    game.showLongText("aunque aparece muy seguido", DialogLayout.Bottom)
    sprites.destroy(conejo_Zombie)
    buey = sprites.create(img`
        11bbbbbbbbbbbbbbbbbbbbb11
        1bbbbbbbbbbbbbbbbbbbbbbb1
        bbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb
        fbbbbbbbbbbfeeeeebbbbbbbb
        bfbbbbbbbbfeeeeeeebbbbbbb
        bfffbbbbbffeeeeeeeebbbbbb
        bbbffbbffeeeeeeeeeeebbbbb
        bbbbffffeeeeeeeeeeeebbbbb
        bbbbfffeeeeeeeeeeeeebbbbb
        bbbbeeeeeeeeeeeeeebebbbbb
        bbbbfefeeeeeeeeeeebebbbbb
        bbbbeeeeeeeeeeeeeebebbbbb
        bbbbf5feeeeeeeeeeebfbbbbb
        bbbb555eeeeeeeeeeebbbbbbb
        bbbeeeeeebbbbebbbebbbbbbb
        bbbebbbbebbbbebbbebbbbbbb
        bbbfbbbbfbbbbfbbbfbbbbbbb
        1bbbbbbbbbbbbbbbbbbbbbbb1
        11bbbbbbbbbbbbbbbbbbbbb11
        `, SpriteKind.Enemy)
    buey.setPosition(78, 57)
    game.showLongText("este buey es un enemigo", DialogLayout.Bottom)
    game.showLongText("rapido con cornamenta", DialogLayout.Bottom)
    sprites.destroy(buey)
    fucanlong = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ffff...........................fff......fff.....................
        fffff..........................f88ffff..f88ff...................
        fffffff.........................f88888ff.f888ff.................
        ffffffff...............ffff......f888888ffff888f................
        fffffffff..............f888fffffffff8888888ffff8f...............
        ffffffffff..............f88888888888ff888888888fff..............
        fffffffffff..............ff88888888888888888888888fff...........
        2ffffffffff................f888888888888888ffff888888f..........
        2ffffff2222f................ff88888888888888fff5f888fffff.......
        2ffff222222ff.................f88888888888888ff5ff8888888f......
        2ffff2222222f..................f888888888888888f88888f88ff......
        2fffff2222222f.........ffffffffffffff88888ffffff888888888f......
        2ffffff222222ff........f88888888f88888888ff222f21121f1ff1f......
        2ffffff2222222f.........ff8888888f88888882222f2ff1f2f1ff1f......
        2fffffff222222ff..........fff88888f8888888f22f2ffff2fff.ff......
        2ffffffff2222ffff............fff88f8888888822f2ffff2f...........
        2ffffffff22ffffff.............f.fff8888888f8ff2ffff2f...........
        2fffffffff2fffffff................ff88888fff8ffffff2fff.........
        2ffffffffffffffffff..............f888888fffff8fff1f21f1f.ff.ff..
        fffffffffffffffffff.............f8888888fff8ff8f18f18f1ff1ff1f..
        fffffffffffffffffff............f88888fffff88fff8ffffff881ff1f...
        ffffffffffffffffffff..........f888fff333f8ff8f8ffffff8888888f...
        ffffffffffffffffffff..........ffff333333fff88f8ffff8f8888888f...
        fffffffffffffffffffff.........f.f333333333f88ff..ff8f888888ff...
        f2fffffffffffffffffff..........f3333333333f8f......fff8888811f..
        f22ffffffffffffffff2ff........f8f333333333ff..........f118ff11f.
        f222ffffffffffffff222ff......f88f33333333ff............f11f.fff.
        f2222ffffffffffffff222ff....f88f333333333f..............f1f.....
        f222ffffffffffffffff222ff..f888f33333333f................ff.....
        f222fffffffffffffffff222f.f8888f33333333f.......................
        ff22ffffffffffffffffff22ff8888f333333333f.......................
        .f2ffffffff2fffffffffff2f88888f333333333f.......................
        .ffffffffff22ffffffffff8888888f3333333333f......................
        ...fffffff22222ffffffff8888888f33333333333f.....................
        ......ffff222222fffffff8888888fff3333333333fff..................
        ..........ffffffffffff8888888ff88ffff333ffff88f.................
        ......................f888888f88888ffffff88888f.................
        ......................fffffffffffffffffffffffff.................
        `, SpriteKind.Player)
    fucanlong.setPosition(85, 40)
    game.showLongText("este es fucanlong", DialogLayout.Bottom)
    game.showLongText("el jefe final", DialogLayout.Bottom)
    game.showLongText("el de mas poder y vida", DialogLayout.Bottom)
    sprites.destroy(fucanlong)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    ninja.vy = -400
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.conejo3, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    pause(randint(5000, 10000))
    Conejo3()
})
info.onLifeZero(function () {
    animation.runImageAnimation(
    ninja,
    [img`
        ........................
        ........................
        ....f...................
        ...f2f..................
        ....f2ffffff....f.......
        ....f2f77777f..fbf......
        .....f2222222f.fbf......
        .....ffffffffffbf.......
        .....fdd1dd1dffbf.......
        .....f7777777fbf........
        .....ff77ff77fbf........
        .....fffffffffff........
        ....f7777777777e........
        ....f7711777711ff.......
        .....ff11777711f........
        ....fff5555555fff.......
        ....f445fffff544f.......
        .....f44f...f44f........
        ......ff.....ff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ....f...................
        ...f2f..................
        ....f2ffffff....f.......
        ....f2f77777f..fbf......
        .....f2222222f.fbf......
        .....ff111f11ffbf.......
        .....fd1f1d1fffbf.......
        .....f7111711fbf........
        .....ff77ff77fbf........
        .....fffffffffff........
        ....f7777777777e........
        ....f7711777711ff.......
        .....ff11777711f........
        ....fff5555555fff.......
        ....f445fffff544f.......
        .....f44f...f44f........
        ......ff.....ff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        .........ffff...........
        .......ffffffff.........
        ......fcccffcccf........
        .....fcffcffcffcf.......
        ....f2cccffffccc2f......
        ....f2ccccffcccc2f......
        ...fc2ccccffcccc2cf.....
        ...fcc2cccffccc2ccf.....
        ...fcc22ffffff22ccf.....
        ...fcfff......fffcf.....
        ...fff.f......f.fff.....
        ...ff..f......f..ff.....
        ....f..f......f..f......
        ...f....f....f..f.......
        ...f....f....f..f.......
        ..f..............f......
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    game.gameOver(false)
})
function catadepresentacion () {
    cambiarpantallainicio(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666662222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666662222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666222222222222226666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6966696222222222222229666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966
        6669666222222222222226696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669
        9699969222222222222226999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699
        9996999222269996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996
        9999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222222222999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222222222999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222222222119992222999922222999999999999999999999999999999999999999999999999999999999999911199999999999999999999999999999999999999999999999999999999999999
        9999999222222222111992222999922222999999999999999999999999999999999999999999999999999999999111911119999999999999999999999999999999999999999999999999999999999999
        9999999222222222111192222999922222999999999999999999999999999999999999999999999999999999991119111111999999999999999999999999999999999999999999999999999999999999
        9999999222211111111912222999922222999999999999999999999999999999999999999999999999999999911111111119199999999999999999999999999999999999999999999999999999999999
        9999999222211111111112222999922222999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999
        9999999222211111111112222999922222999999999999999999999999999999999999999999999999999999911111111111111999999999999999999999999999999999999999999999999999999999
        9999999222211111111112222999922222999999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999
        9999999222211111111112222999922222999999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999999999999999999999999999999999999
        9999999222291111111192222999922222999999999999999999999999999999999999999999999999999999999911111111999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222999922222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222299999999992222222222222999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999991119999999999999999999999
        9999999222299999999992222222222222999999999999999991119111199999999999999999999999999999999999999999999999999999999999999999999999911191111999999999999999999999
        9999999222299999999999999999999999999999999999999911191111119999999999999999999999999999999999999999999999999999999999999999999999111911111199999999999999999999
        9999999999999999999999999999999999999999999999999111111111191999999999999999999999999999999999999999999999999999999999999999999991111111111919999999999999999999
        9999999999999999999999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999999999999991111111111111999999999999999999
        9999999999999999999999999999999999999999999999999111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999
        9999999999999999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999991111999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999
        9999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999
        9991111111111999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999
        9911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111119999999999999999999911119999999999999999999999999999999999991111111111111111111199999999999999999999111199999999999999999999999999999999999911
        1111111111111111111199999999999999991111111199999999999999999999999999999999111111111111111111111111999999999999999911111111999999999999999999999999999999991111
        1111111111111111111119999999999999911111111119999999999999999999999999999991111111111111111111111111199999999999999111111111199999999999999999999999999999911111
        1111111111111111111111999999999999111111111111999999999999999999999999999911111111111111111111111111119999999999991111111111119999999999999999999999999999111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111111199991111111111111111111199991111999999999999111111111111111111111111111111111111999911111111111111111111999911119999999999991111111111
        1111111111111111111111111111111111111111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111111111199999999111111111111
        1111111111111111111111111111111111111111111111111111111111111999999111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111
        1111111111111111111111111111111111111111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111111111111999911111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111777777111111111111111111111111117777771111111111111111111111111177777711111111111111111111111111777777111111111111111111111111117777771
        7771111111111111111117777111111777711111111111111111177771111117777111111111111111111777711111177771111111111111111117777111111777711111111111111111177771111117
        1777777111111111177771111111111117777771111111111777711111111111177777711111111117777111111111111777777111111111177771111111111117777771111111111777711111111111
        1177777771111117711111111111111111777777711111177111111111111111117777777111111771111111111111111177777771111117711111111111111111777777711111177111111111111111
        1177777777777771111111111111111111777777777777711111111111111111117777777777777111111111111111111177777777777771111111111111111111777777777777711111111111111111
        1777777777711111111111111111111117777777777111111111111111111111177777777771111111111111111111111777777777711111111111111111111117777777777111111111111111111111
        1777777777771111111111111111111117777777777711111111111111111111177777777777111111111111111111111777777777771111111111111111111117777777777711111111111111111111
        7777777777777111111111111111111777777777777771111111111111111117777777777777711111111111111111177777777777777111111111111111111777777777777771111111111111111117
        7777777776666661111111111111777777777777766666611111111111117777777777777666666111111111111177777777777776666661111111111111777777777777766666611111111111117777
        7777766667777776666111177777777777777666677777766661111777777777777776666777777666611117777777777777766667777776666111177777777777777666677777766661111777777777
        7666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc777777777
        67777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc7777776
        7776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c666667
        777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777
        7777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c7777
        7777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c777
        77777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c77
        677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    cambiarpantallainicio(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966
        6669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669
        9699969996999699969996999699969996999699969996999699969996999699969996992222222996999699969996999699969996999699969996999699969996999699969996999699969996999699
        9996999699969996999699969996999699969996999699969996999699969996999699962222222699969996999699969996999699969996999699969996999699969996999699969996999699969996
        9999999999999999999999999999999999999999999999999999922222222299999999922222222299999922229999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999922222222299999999922222222299999922229999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999222222222222999992222222222222999922229222222229999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999222222222222999992222222222222999922229222222229999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999922222222222222999992222999922222299922222222222222299999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999222299999999222299999999999999222299922222222222222229999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999222299999999222299999992222222222299922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999222299999999222299999992222222222299922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999222299999999222299999992222222222299922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999991119999999999999999999999999999999222299999999999999999922222222222299922229999911192222999999999999999999999999999999999999999999999999999999999
        9999999999911191111999999999999999999999999999999222299999999999999992222222222222299922229111911112222999999999999999999999999999999999999999999999999999999999
        9999999999111911111199999999999999999999999999999222299999999999999992222222222222299922221119111112222999999999999999999999999999999999999999999999999999999999
        9999999991111111111919999999999999999999999999999222299999999999999922229999999222299922221111111112222999999999999999999999999999999999999999999999999999999999
        9999999991111111111111999999999999999999999999999222299999999999999922229999999222299922221111111112222999999999999999999999999999999999999999999999999999999999
        9999999991111111111111199999999999999999999999999222299999999999999922229999999222299922221111111112222999999999999999999999999999999999999999999999999999999999
        9999999999111111111111999999999999999999999999999222299999999999999922229999999222299922221111111112222999999999999999999999999999999999999999999999999999999999
        9999999999111111111111999999999999999999999999999222299999999999999922229999999222299922221111111112222999999999999999999999999999999999999999999999999999999999
        9999999999991111111199999999999999999999999999999222299999999222299922229999999222299922229911111112222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999222299999999222299922229999999222299922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999222299999999222299922229999999222299922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999922222222222222999992222222222222229922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999222222222222999999922222222222229922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999222222222222999999922222222222229922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999222222222222999999922222222222229922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999922222222299999999992222222922229922229999999992222999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999991119999999999999999999999
        9999999999999999999999999999999999999999999999999991119111199999999999999999999999999999999999999999999999999999999999999999999999911191111999999999999999999999
        9999999999999999999999999999999999999999999999999911191111119999999999999999999999999999999999999999999999999999999999999999999999111911111199999999999999999999
        9999999999999999999999999999999999999999999999999111111111191999999999999999999999999999999999999999999999999999999999999999999991111111111919999999999999999999
        9999999999999999999999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999999999999991111111111111999999999999999999
        9999999999999999999999999999999999999999999999999111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999
        9999999999999999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999991111999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999
        9999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999
        9991111111111999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999
        9911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111119999999999999999999911119999999999999999999999999999999999991111111111111111111199999999999999999999111199999999999999999999999999999999999911
        1111111111111111111199999999999999991111111199999999999999999999999999999999111111111111111111111111999999999999999911111111999999999999999999999999999999991111
        1111111111111111111119999999999999911111111119999999999999999999999999999991111111111111111111111111199999999999999111111111199999999999999999999999999999911111
        1111111111111111111111999999999999111111111111999999999999999999999999999911111111111111111111111111119999999999991111111111119999999999999999999999999999111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111111199991111111111111111111199991111999999999999111111111111111111111111111111111111999911111111111111111111999911119999999999991111111111
        1111111111111111111111111111111111111111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111111111199999999111111111111
        1111111111111111111111111111111111111111111111111111111111111999999111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111
        1111111111111111111111111111111111111111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111111111111999911111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111777777111111111111111111111111117777771111111111111111111111111177777711111111111111111111111111777777111111111111111111111111117777771
        7771111111111111111117777111111777711111111111111111177771111117777111111111111111111777711111177771111111111111111117777111111777711111111111111111177771111117
        1777777111111111177771111111111117777771111111111777711111111111177777711111111117777111111111111777777111111111177771111111111117777771111111111777711111111111
        1177777771111117711111111111111111777777711111177111111111111111117777777111111771111111111111111177777771111117711111111111111111777777711111177111111111111111
        1177777777777771111111111111111111777777777777711111111111111111117777777777777111111111111111111177777777777771111111111111111111777777777777711111111111111111
        1777777777711111111111111111111117777777777111111111111111111111177777777771111111111111111111111777777777711111111111111111111117777777777111111111111111111111
        1777777777771111111111111111111117777777777711111111111111111111177777777777111111111111111111111777777777771111111111111111111117777777777711111111111111111111
        7777777777777111111111111111111777777777777771111111111111111117777777777777711111111111111111177777777777777111111111111111111777777777777771111111111111111117
        7777777776666661111111111111777777777777766666611111111111117777777777777666666111111111111177777777777776666661111111111111777777777777766666611111111111117777
        7777766667777776666111177777777777777666677777766661111777777777777776666777777666611117777777777777766667777776666111177777777777777666677777766661111777777777
        7666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc777777777
        67777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc7777776
        7776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c666667
        777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777
        7777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c7777
        7777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c777
        77777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c77
        677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    cambiarpantallainicio(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222266666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222266666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222266666666666666666666666666666666666666666666666666666666
        6966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966222269666966696669666966696669666966696669666966696669666966
        6669666966696669666966696669666966696669666966696669666966696669666966696669666966696669666966696669222266696669666966696669666966696669666966696669666966696669
        9699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699222296999699969996999699969996999699969996999699969996999699
        9996999699969996999699969996999699969996999699969996999699969996999699969996999699969996999699969996222299969996999699969996999699969996999699969996999699969996
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999992222222999999222299999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999992222222999999222299999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999922222222229999222292222222299999999999222222299999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999922222222229999222292222222299999999999222222299999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999222222222222999222222222222222999999992222222222999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299922229999999222299222222222222222299999922222222222299
        9999999999999991119999999999999999999999999999999999999999999999999999999999999999999999999999911199222299922229999999222299222299999999922229992222999999922229
        9999999999911191111999999999999999999999999999999999999999999999999999999999999999999999999111911119222299922229999999222299222299999999922229992222999999922229
        9999999999111911111199999999999999999999999999999999999999999999999999999999999999999999991119111111222299922229999999222299222299999999922229992222999999922229
        9999999991111111111919999999999999999999999999999999999999999999999999999999999999999999911111111119222299922229999999222299222299999999922229992222999999922229
        9999999991111111111111999999999999999999999999999999999999999999999999999999999999999999911111111111222299922229999999222299222299999999922229992222999999922229
        9999999991111111111111199999999999999999999999999999999999999999999999999999999999999999911111111111222299922229999999222299222299999999922229992222999999922229
        9999999999111111111111999999999999999999999999999999999999999999999999999999999999999999991111111111222299922229999999222299222299999999922229992222999999922229
        9999999999111111111111999999999999999999999999999999999999999999999999999999999999999999991111111111222299922229999999222299222299999999922229992222999999922229
        9999999999991111111199999999999999999999999999999999999999999999999999999999999999999999999911111111222299922229999999222299222299999999922229992222999999922229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299922229999999222299222299999999922229992222999999922229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299922229999999222299222299999999922229992222999999922229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299922229999999222299222299999999922229999922222222222229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299922229999999222299222299999999922229999992222222222229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299922229999999222299222299999999922229999992222222222229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999222222222222999222299999999922229999999222222222229
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222299999922222222229999222299999999922229999999999999922229
        9999999999999999999999999999999999999999999999999999999111999999999999999999999999999999999999999999222299999922222222229999222299999991122229999999999999922229
        9999999999999999999999999999999999999999999999999991119111199999999999999999999999999999999999999999222299999922222222229999222299911191122229999999999999922229
        9999999999999999999999999999999999999999999999999911191111119999999999999999999999999999999999999999222299999992222222999999222299111911122229999999999999922229
        9999999999999999999999999999999999999999999999999111111111191999999999999999999999999999999999999999999999999999999999999999999991111111111919999999999999922229
        9999999999999999999999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999999999999991111111111111992222999999922229
        9999999999999999999999999999999999999999999999999111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111192222999999922229
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111992222999999922229
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111992222999999922229
        9999999999999999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999922222222222299
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999922222222222299
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992222222222999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222222299999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999991111999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999
        9999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999
        9991111111111999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999
        9911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111119999999999999999999911119999999999999999999999999999999999991111111111111111111199999999999999999999111199999999999999999999999999999999999911
        1111111111111111111199999999999999991111111199999999999999999999999999999999111111111111111111111111999999999999999911111111999999999999999999999999999999991111
        1111111111111111111119999999999999911111111119999999999999999999999999999991111111111111111111111111199999999999999111111111199999999999999999999999999999911111
        1111111111111111111111999999999999111111111111999999999999999999999999999911111111111111111111111111119999999999991111111111119999999999999999999999999999111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111111199991111111111111111111199991111999999999999111111111111111111111111111111111111999911111111111111111111999911119999999999991111111111
        1111111111111111111111111111111111111111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111111111199999999111111111111
        1111111111111111111111111111111111111111111111111111111111111999999111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111
        1111111111111111111111111111111111111111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111111111111999911111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111777777111111111111111111111111117777771111111111111111111111111177777711111111111111111111111111777777111111111111111111111111117777771
        7771111111111111111117777111111777711111111111111111177771111117777111111111111111111777711111177771111111111111111117777111111777711111111111111111177771111117
        1777777111111111177771111111111117777771111111111777711111111111177777711111111117777111111111111777777111111111177771111111111117777771111111111777711111111111
        1177777771111117711111111111111111777777711111177111111111111111117777777111111771111111111111111177777771111117711111111111111111777777711111177111111111111111
        1177777777777771111111111111111111777777777777711111111111111111117777777777777111111111111111111177777777777771111111111111111111777777777777711111111111111111
        1777777777711111111111111111111117777777777111111111111111111111177777777771111111111111111111111777777777711111111111111111111117777777777111111111111111111111
        1777777777771111111111111111111117777777777711111111111111111111177777777777111111111111111111111777777777771111111111111111111117777777777711111111111111111111
        7777777777777111111111111111111777777777777771111111111111111117777777777777711111111111111111177777777777777111111111111111111777777777777771111111111111111117
        7777777776666661111111111111777777777777766666611111111111117777777777777666666111111111111177777777777776666661111111111111777777777777766666611111111111117777
        7777766667777776666111177777777777777666677777766661111777777777777776666777777666611117777777777777766667777776666111177777777777777666677777766661111777777777
        7666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc777777777
        67777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc7777776
        7776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c666667
        777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777
        7777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c7777
        7777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c777
        77777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c77
        677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    cambiarpantallainicio(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666662222222222226666666666666666666666666666666666666666666666666666666666666666666666666622226666666666666666666666666666666666666666666666666666666666
        6666666666662222222222226666666666666666666666666666666666666666666666666666666666666666666666666622226666666666666666666666666666666666666666666666666666666666
        6966696669222222222222226966696669666966696669666966696669666966696669666966696669666966696669666922226669666966696669666966696669666966696669666966696669666966
        6669666966222222222222226669666966696669666966696669666966696669666966696669666966696669666966696622226966696669666966696669666966696669666966696669666966696669
        9699969996222222222222229699969996999699969996999699969996999699969996999699969996999699969996999622229996999699969996999699969996999699969996999699969996999699
        9996999699222222222222229996999699969996999699969996999699969996999699969996999699969996999699969922229699969996999699969996999699969996999699969996999699969996
        9999999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999922229999999999999999999999999999999999999999999999999999999999
        9999999999222299999999999999999999999999999999999999999999999999999999999999999999999999999999999922229999999999999999999999999999999999999999999999999999999999
        9999999999222299999999999999999999999999999999999999999999999999222222299999999999999999999999999922229999999999999999999999999999999999999999999999999999999999
        9999999999222299999999999999999999999999999999999999999999999999222222299999999999999999999999999922229999999999999999999999999999999999999999999999999999999999
        9999999999222299999999999999999999999999999992222222229999999992222222229999992222999999999999999922229999999222222299999922229999999999999999999999999999999999
        9999999999222299999999999999999999999999999992222222229999999992222222229999992222999999999999999922229999999222222299999922229999999999999999999999999999999999
        9999999999222299999999992222999922222999999922222222222299999222222222222299992222922222222999999922229999992222222222999922229222222229999999999922222229999999
        9999999999222299999999992222999922222999999922222222222299999222222222222299992222922222222999999922229999992222222222999922229222222229999999999922222229999999
        9999999999222222222999992222999922222999992222222222222299999222299992222229992222222222222229999922229999922222222222299922222222222222299999999222222222299999
        9999999999222222222999992222999922222999922229999999922229999999999999922229992222222222222222911122229992222999999922229922222222222222229999992222222222229999
        9999999999222222222999992222999922222999922229999999922229999999222222222229992222999999999222211122229992222999999922229922229999999992222999222299999992222999
        9999999999222222222199992222999922222999922229999999922229999999222222222229992222999999991222211122229992222999999922229922229999999992222999222299999992222999
        9999999991222222222919992222999922222999922229999999922229999999222222222229992222999999911222211122229992222999999922229922229999999992222999222299999992222999
        9999999991222211111111992222999922222999922229999999999999999992222222222229992222999999911222211122229992222999999922229922229999999992222999222299999992222999
        9999999991222211111111192222999922222999922229999999999999999222222222222229992222999999911222211122221992222999999922229922229999999992222999222299999992222999
        9999999999222211111111992222999922222999922229999999999999999222222222222229992222999999991222211122229992222999999922229922229999999992222999222299999992222999
        9999999999222211111111992222999922222999922229999999999999992222999999922229992222999999991222211122229992222999999922229922229999999992222999222299999992222999
        9999999999222211111199992222999922222999922229999999999999992222999999922229992222999999999222211122229992222999999922229922229999999992222999222299999992222999
        9999999999222299999999992222999922222999922229999999999999992222999999922229992222999999999222299922229992222999999922229922229999999992222999222299999992222999
        9999999999222299999999992222999922222999922229999999999999992222999999922229992222999999999222299922229992222999999922229922229999999992222999222299999992222999
        9999999999222299999999992222999922222999922229999999999999992222999999922229992222999999999222299922229992222999999922229922229999999992222999222299999992222999
        9999999999222299999999992222999922222999922229999999922229992222999999922229992222999999999222299922229992222999999922229922229999999992222999992222222222222999
        9999999999222299999999992222222222222999922229999999922229992222999999922229992222999999999222299922229992222999999922229922229999999992222999999222222222222999
        9999999999222299999999992222222222222999922229999999922229992222999999922229992222999999999222299922229992222999999922229922229999999992222999999222222222222999
        9999999999222299999999992222222222222999992222222222222299999222222222222222992222999999999222299922229999922222222222299922229999999992222999999922222222222999
        9999999999222299999999992222222222222999999922222222222211999992222222222222992222999999999222299922229999992222222222999922229999999992222999999999999992222999
        9999999999222299999999992222222222222999999922222222222211199992222222222222992222999999999222299922229999992222222222999922229999911192222999999999999992222999
        9999999999222299999999992222222222222999999922222222222211119992222222222222992222999999999222299922229999992222222222999922229999111912222199999999999992222999
        9999999999222299999999999999999999999999999992222222221111191999222222292222992222999999999222299922229999999222222299999922229991111112222919999999999992222999
        9999999999999999999999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999999999999991111111111111999999999992222999
        9999999999999999999999999999999999999999999999999111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111222299999992222999
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111222299999992222999
        9999999999999999999999999999999999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111222299999992222999
        9999999999999999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199222299999992222999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992222222222229999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992222222222229999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999222222222299999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999922222229999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999991111999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999
        9999111111119999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999
        9991111111111999999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999999999999999999999999999999
        9911111111111199999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        9111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111999999999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999
        1111111111111111119999999999999999999911119999999999999999999999999999999999991111111111111111111199999999999999999999111199999999999999999999999999999999999911
        1111111111111111111199999999999999991111111199999999999999999999999999999999111111111111111111111111999999999999999911111111999999999999999999999999999999991111
        1111111111111111111119999999999999911111111119999999999999999999999999999991111111111111111111111111199999999999999111111111199999999999999999999999999999911111
        1111111111111111111111999999999999111111111111999999999999999999999999999911111111111111111111111111119999999999991111111111119999999999999999999999999999111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111199999999991111111111111199999999999999999999999999111111111111111111111111111111999999999911111111111111999999999999999999999999991111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111119999999911111111111111119999999999999999999999991111111111111111111111111111111199999999111111111111111199999999999999999999999911111111
        1111111111111111111111111199991111111111111111111199991111999999999999111111111111111111111111111111111111999911111111111111111111999911119999999999991111111111
        1111111111111111111111111111111111111111111111111111111111119999999911111111111111111111111111111111111111111111111111111111111111111111111199999999111111111111
        1111111111111111111111111111111111111111111111111111111111111999999111111111111111111111111111111111111111111111111111111111111111111111111119999991111111111111
        1111111111111111111111111111111111111111111111111111111111111199991111111111111111111111111111111111111111111111111111111111111111111111111111999911111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111119911111111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111777777111111111111111111111111117777771111111111111111111111111177777711111111111111111111111111777777111111111111111111111111117777771
        7771111111111111111117777111111777711111111111111111177771111117777111111111111111111777711111177771111111111111111117777111111777711111111111111111177771111117
        1777777111111111177771111111111117777771111111111777711111111111177777711111111117777111111111111777777111111111177771111111111117777771111111111777711111111111
        1177777771111117711111111111111111777777711111177111111111111111117777777111111771111111111111111177777771111117711111111111111111777777711111177111111111111111
        1177777777777771111111111111111111777777777777711111111111111111117777777777777111111111111111111177777777777771111111111111111111777777777777711111111111111111
        1777777777711111111111111111111117777777777111111111111111111111177777777771111111111111111111111777777777711111111111111111111117777777777111111111111111111111
        1777777777771111111111111111111117777777777711111111111111111111177777777777111111111111111111111777777777771111111111111111111117777777777711111111111111111111
        7777777777777111111111111111111777777777777771111111111111111117777777777777711111111111111111177777777777777111111111111111111777777777777771111111111111111117
        7777777776666661111111111111777777777777766666611111111111117777777777777666666111111111111177777777777776666661111111111111777777777777766666611111111111117777
        7777766667777776666111177777777777777666677777766661111777777777777776666777777666611117777777777777766667777776666111177777777777777666677777766661111777777777
        7666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc7777777777666677777777677766cccc777777777
        67777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc777777667777767777776777766666cc7777776
        7776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c6666677776776777777777776666666c666667
        777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777777677777777777776666666c6c77777
        7777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c77777777777777777777766666c6c66c7777
        7777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c7777777777777777776666666c66666c777
        77777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c7777777777777766666666666666666c77
        677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc677777766666666666666666666666cc
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    pause(200)
    Titulo = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .............................ffff...............................
        .......................ffff...f88fff............................
        ........................f88f...f8888f...........................
        .........................f88ff..fff88fff........................
        ................fff.......f888ffff888888f.......................
        .................f8ffff....f888888f888888ff.....................
        ..................f8888fff..f888888fffff888ff...................
        ...................f888888ffffff8888888888888ff.................
        ....................f8888888888888888ffff888888fff..............
        .....................f8888888888888888ff3f8888888fffff..........
        .....................ff8888888888888888f3ff8888888888f..........
        .......................f8888888888888888888888888888ff..........
        ........................f88888888888fffff888888888888f..........
        .........................ff8888888fff222f21121fff1ff1f..........
        ................ffffffffffff888888f2222f2ff1f2fff1ff1f..........
        .................f888888888f88888f88822f2ffff2fffff.ff..........
        ..................f888888888f888f88888ff2ffff2ff................
        ...................ff88888888f8f88888f822ffff2ff................
        .....................ff8888888f888888ff82ffff2fff...ff.ff.......
        .......................ffff88f88888888ff8ff1f21f1f.f1ff1f.......
        ...........................ff88888ff888fff1ff1ff1ff1ff1f........
        ...........................f8888ff888888f8fffffff8f88f8f........
        ..........................f888fff8888888fffffff8f8f8f88f........
        .........................f88ff..f888f888fffffff8f88ff88f........
        .........................fff....f88f888f...fffffff88f811f.......
        ................................f8f888f...........f11ff11f......
        ................................fff88f.............f11ffff......
        ..................................f8f...............f1f.........
        ..................................fff................ff.........
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.titulo)
    animation.runImageAnimation(
    Titulo,
    [img`
        .............................ffffffffffffffffffff.......................................................................
        ........................fffff88888888888888888888fff....................................................................
        .....................ffff88888888888888888888888888fff..................................................................
        ..................ffff88888888888888888888888888888888ffffffffffff......................................................
        .........................ff888888888888888888888888888888888ffffffffffff................................................
        ...........................ff888888888888888888888888888888888ffffffffffff..............................................
        ............................ff888888888888888888888888888888888ffffffffffff.............................................
        .............................f88888888888888888888888888888888888fffffffffff............................................
        .............................ff88888888888888888888888888888888888ffffffffff............................................
        ..............................f88888888888888888888888888888888888ffffffffff................ffff........................
        ..............................fffffffff88888888888888888888888888888ffffffffff.........f88f...f8888f....................
        fffffffffff...................f........ff888888888888888888888888888ffffffffff..........f88ff..fff88fff.................
        ffff888888fffff..........................ff88888888888888888888888888fffffffff.fff.......f888ffff888888f................
        ...ffff8888888ffff.........................ff888888888888888888888888ffffffffff.f8ffff....f888888f888888ff..............
        ......ff8888888888fff.......................f888888888888888888888888ffffffffff..f8888fff..f888888fffff888ff............
        ........ff88888888888fff....................f8888888888888888888888888fffffffff....f8888888888888888ffff888888fff.......
        .........f.888888888888ff...................ffffffff888888888888888888fffffffff.....f8888888888888888ff3f8888888fffff...
        ..........f.8888888888888ff........................fff8888888888888888fffffffff.....ff8888888888888888f3ff8888888888f...
        ..........ff88888888888888ff.........................ff888888888888888ffffffffffffff88f8888888888888888888888888888ff...
        ...........ff88888888888888fff.........................f888888888888888ffffffff88888888f88888888888fffff888888888888f...
        ............ff888888888888888ff.........................f88888888888888fff8fff8888888888ff8888888fff222f21121fff1ff1f...
        ..............f88888888888888888ff......................f88888888888888fff888888f888888888f88888f88822f2ffff2fffff.ff...
        ..............ff88888888888888888fff....................f888888888888fff888888888f888888888f888f88888ff2ffff2ff.........
        ...............f8888888888888888888ff..................ff8888888888fff888888888888ff88888888f8f88888f822ffff2ff.........
        ...............ff88888888888888888888ff...............ff8888888888ff8888888888888888ff8888888f888888ff82ffff2fff...ff.ff
        ................ff88888888888888888888ffff...........ff8888888fffff8888888888888888888ffff88f88888888ff8ff1f21f1f.f1ff1f
        .................ff8888888888888888888888ff8...ffffffffffffffff888888888888888888888888888ff88888ff888fff1ff1ff1ff1ff1f.
        ..................ff888888888888888888888888888888888888888888888888888888888888888888888f888fff8888888fffffff8f8f8f88f.
        ...................ff8888888888888888888888888888888888888888888888888888888888888888888f88ff88f888f888fffffff8f88ff88f.
        ....................ff888888888888888888888888888888888888888888888888888888888888888888fff8888888f888f...fffffff88f811f
        .....................ff888888888888888888888888888888888888888888888888888888888888888888888888f8f888f...........f11ff11
        ......................ff888888888888888888888888888888888888888888888888888888888888888888888.ffff88f.............f11fff
        .........................fff88888888888888888888888888888888888888888888888888888888888888.fff...fff................ff..
        ...........................ffffff888888888888888888888888888888888888888888888888888888..fff............................
        .................................fffff888888888888888888888888888888888888888888888888ffff..............................
        .....................................ffff888888888888888888888888888888888888888888ffff.................................
        ........................................fffffff8888888888888888888888888888888888..f....................................
        ..............................................ffffff888888888888888888888888888..ff.....................................
        ............................................................ffffff888888888fff..........................................
        ..................................................................ffffffffff............................................
        `,img`
        .................................................................ffffffffff.............................................
        ...........................................................ffffff888888888fff...........................................
        ..................................................ffffffffff88888888888888888fff........................................
        .............................................ffffff88888888888888888888888888888ff......................................
        .......................................fffffff888888888888888888888888888888888888f...........ffff......................
        ....................................ffff888888888888888888888888888888888888888888ffff..ffff...f88fff...................
        ................................fffff888888888888888888888888888888888888888888888888fffff88f...f8888f..................
        ..........................ffffff88888888888888888888888888888f88888888888f88888888888888fff88ff..fff88fff...............
        ........................fff8888888888888888888888888888888888f88888888888f8888888fff888888ff888ffff888888f..............
        .......................ff88888888888888888888888888888888888ff88888888888f88888888f8ffff8888f888888f888888ff............
        .....................ff8888888888888888888888888888888888888f888888888888f888888888f8888fff88f888888fffff888ff..........
        ....................ff8888888888888888888888888888888888888f8888888888888f8888888888f888888ffffff8888888888888ff........
        ...................ff8888888888888888888888888888888888888ff888888888888ff88888888888f8888888888888888ffff888888fff.....
        ..................ff8888888888888888888888888888888888888ff8888888888888f8888888888888f8888888888888888ff3f8888888fffff.
        .................ff88888888888888888888888888888888888888f8888888888888f88888888888888ff8888888888888888f3ff8888888888f.
        .................f88888888888888888888888ffffff888888888f88888888888888f8888888888888888f8888888888888888888888888888ff.
        ................ff8888888888888888888888ff8...fffffffffff8888888888888f888888888888888888f88888888888fffff888888888888f.
        ...............ff88888888888888888888ffff..........fff8888888888888888f8888888888888888888ff8888888fff222f21121fff1ff1f.
        ..............ff88888888888888888888ff........fffff888888888888888888f88888888888ffffffffffff888888f2222f2ff1f2fff1ff1f.
        ..............f8888888888888888888ff..........f88888888888888888888fff888888888888f888888888f88888f88822f2ffff2fffff.ff.
        .............ff88888888888888888fff...........f88888888888888888888ffff888888888888f888888888f888f88888ff2ffff2ff.......
        .............f88888888888888888ff...........ff88888888888888888888ff..fff88888888888ff88888888f8f88888f822ffff2ff.......
        ............ff888888888888888fff............f88888888888888888888ff.....fff88888888888ff8888888f888888ff82ffff2fff...ff.
        ...........ff888888888888888ff...........fff88888888888888888888ff........ffff8888888888ffff88f88888888ff8ff1f21f1f.f1ff
        ..........ff88888888888888fff......fffffff888888888888888888888ff...........ffff888888888888ff88888ff888fff1ff1ff1ff1ff1
        .........ff88888888888888ff.......ff88888888888888888888888888ff................fff888888888f8888ff888888f8fffffff8f88f8
        .........f88888888888888ff.......ff8888888888888888888888888fff....................fffffffff888fff8888888fffffff8f8f8f88
        ........f8888888888888ff........ff8888888888888888888888888ff.............................f88ff..f888f888fffffff8f88ff88
        .......ff88888888888fff........ff888888888888888888888888ff...............................fff....f88f888f...fffffff88f81
        ......f888888888888ff.......ffff888888888888888888888888ff.......................................f8f888f...........f11ff
        .....ff8888888888fff....fffff88888888888888888888888888ff........................................fff88f.............f11f
        ..ffff8888888ffff.......ff8888888888888888888888888888ff...........................................f8f...............f1f
        fff888888fffff...........ff88888888888888888888888ffff.............................................fff................ff
        ffffffffff................fff888888888888fffffffff......................................................................
        ............................ffffffffffffff..............................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        `],
    200,
    true
    )
    Titulo.setPosition(55, 81)
    music.play(music.stringPlayable(music.convertRTTTLToMelody("yiear:d=4,o=5,b=125:f6,8p,16g6,16f6,8d6,8c6,8d6,8f6,16c6,16d6,16c6,16a#,8g,32p,8a#.,32p,a#"), 120), music.PlaybackMode.LoopingInBackground)
    pause(500)
    effects.clouds.startScreenEffect(5000)
    boton_de_inicio = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
        . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
        . c 7 7 8 8 8 8 8 8 8 7 7 c . 
        . c 9 7 8 7 7 7 7 7 8 7 9 c . 
        . c 9 9 7 7 7 7 7 7 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.titulo)
    animation.runImageAnimation(
    boton_de_inicio,
    [img`
        ..........666666666666..........
        ........6667777777777666........
        ......66677777777777777666......
        .....6677777779999777777766.....
        ....667777779966669977777766....
        ....677777799668866117777776....
        ...66777779966877861197777766...
        ...66777799668677686699777766...
        ...88777796688888888669777788...
        ...88777788888888888888777788...
        ...88977888679999997688877988...
        ...88977886777777777768877988...
        ...88997777777777777777779988...
        ...88799777777777777777711788...
        ...88679997777777777779117688...
        ..cc866679999999999999976668cc..
        .ccbc6666679999999999766666cbcc.
        .fcbcc66666666666666666666ccbcf.
        .fcbbcc666666666666666666ccbdcf.
        .f8bbbccc66666666666666cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb111ddccf.
        .f6ccccbbbddddddddddddd111dcccf.
        .f6ccccccbbddddddddddddddbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......88877666666666677888......
        .....8877666667777666667788.....
        ....887666667788887766666788....
        ....866666677888888996666678....
        ...88666667788877889976666688...
        ...88666677888677688877666688...
        ...88666778888888888887766688...
        ...88667788888888888888776688...
        ..cc866788866777777668887668cc..
        .ccbc8668866666666666688668cbcc.
        .fcbcc86666666666666666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `],
    200,
    true
    )
    boton_de_inicio.setPosition(76, 96)
    pantallatituloon = false
}
// añadir cerdo del profeso sprite
function Buey () {
    for (let spawn_buey of tiles.getTilesByType(grafxkid.summerRock)) {
        buey = sprites.create(img`
            .........................
            .........................
            .........................
            .........................
            f..........feeeee........
            .f........feeeeeee.......
            .fff.....ffeeeeeeee......
            ...ff..ffeeeeeeeeeee.....
            ....ffffeeeeeeeeeeee.....
            ....fffeeeeeeeeeeeee.....
            ....eeeeeeeeeeeeee.e.....
            ....fefeeeeeeeeeee.e.....
            ....eeeeeeeeeeeeee.e.....
            ....f5feeeeeeeeeee.f.....
            ....555eeeeeeeeeee.......
            ...eeeeee....e...e.......
            ...e....e....e...e.......
            ...f....f....f...f.......
            .........................
            .........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(buey, spawn_buey)
        animation.runImageAnimation(
        buey,
        [img`
            .........................
            .........................
            .........................
            .........................
            f..........feeeee........
            .f........feeeeeee.......
            .fff.....ffeeeeeeee......
            ...ff..ffeeeeeeeeeee.....
            ....ffffeeeeeeeeeeee.....
            ....fffeeeeeeeeeeeee.....
            ....eeeeeeeeeeeeee.e.....
            ....fefeeeeeeeeeee.e.....
            ....eeeeeeeeeeeeee.e.....
            ....f5feeeeeeeeeee.f.....
            ....555eeeeeeeeeee.......
            ...eeeeee....e...e.......
            ...e....e....e...e.......
            ...f....f....f...f.......
            .........................
            .........................
            `,img`
            ff..ff...................
            .fff.ff..................
            ...ff.ff...eee...........
            ....ff.ff.eeeee..........
            .....ffffeeeeeee.........
            .....feeeeeeeeeee........
            .....efefeeeeeeeee.......
            .....eeeeeeeeeeeeee......
            .....52525eeeeeeeeee.....
            .....55555eeeeeeeeeee....
            ......555.eeeeeeeeeee....
            ..........eeeeeeeeeeeef..
            ..........eeeeeeeeeee....
            ...........f..eeeeeee....
            ..............e..e.e.....
            ..............f..e.e.....
            .................e.e.....
            .................f.f.....
            .........................
            .........................
            `,img`
            .........................
            .........................
            .......eeee..............
            ......eeeeeeeee..........
            ..f...eeeeeeeeee.........
            f..f.eeeeeeeeeeee........
            .ff.ffeeeeeeeeeee........
            ..ff.ffeeeeeeeeeeee......
            ...ffeffeeeeeeeeeeee.....
            ...eeeeeeeeeeeeeeeee.....
            ...efefeeeeeeeeeeeeee....
            ...eeeeeeeeeeeeeeeeeee...
            ...eeeeeeeeeeeeeeeeeeee..
            ...55555eeeeeeeeeeeeeeeef
            ...52525eeeeeeeeeeeeeee..
            ...55555eeeeeeeeeeeeee...
            ....555.e..e..e..e.......
            ........f..f..f..f.......
            .........................
            .........................
            `],
        200,
        true
        )
        buey.ay = 1500
        buey.follow(ninja, 80)
    }
}
function Personajes_Fondo2 () {
    escenario_1_bambu = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . f b f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `, SpriteKind.Bambu1)
    animation.runImageAnimation(
    escenario_1_bambu,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . f b f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . f b f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . f b f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . f b f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        `],
    350,
    false
    )
    escenario_bambu_12 = sprites.create(img`
        . . . . . . . . . . . . . f b f 
        . . . . . . . b . . b b b . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . b . b b . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        `, SpriteKind.bambu1_2)
    animation.runImageAnimation(
    escenario_bambu_12,
    [img`
        . . . . . . . . . . . . . f b f 
        . . . . . . . b . . b b b . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . b . b b . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . f b f 
        . . . . . . . . b b b b b . . . 
        . . . . . b . b b . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . . b b b b b f . . 
        . . . . . b . b b . . . . . f b 
        . . . . . . b b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b . . . . . 
        . . . . . b . b b . . f . . . . 
        . . . . . . b . . . . . b . . . 
        . . . . . b . b . . . . . f . . 
        . . b . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . b . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        b b b b . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . . b b b b b f . . 
        . . . . . b . b b . . . . . b f 
        . . . . . . b b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . f b f 
        . . . . . . . . b b b b b . . . 
        . . . . . b . b b . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . . b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b b b . . . . . . . . . . . 
        . . . b . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . . b . . . . . . . . . . . . . 
        . b b b . . . . . . . . . . . . 
        `],
    350,
    false
    )
    escenario_bambu_13 = sprites.create(img`
        f b f . . . . . . . . . . . . . 
        . . . b b b . . b . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b b . b . . . . . 
        . . . . . . . . . b . . . . . . 
        . . . . . . . . b . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        `, SpriteKind.Bambu1_3)
    animation.runImageAnimation(
    escenario_bambu_13,
    [img`
        f b f . . . . . . . . . . . . . 
        . . . b b b . . b . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . b b . b . . . . . 
        . . . . . . . . . b . . . . . . 
        . . . . . . . . b . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        f b f . . . . . b . . . . . . . 
        . . . b b b b b . . . . . . . . 
        . . . . . . . b b . b . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . f b b b b b . . . . . . . . 
        f b . . . . . b b . b . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . . . . . . . . . 
        . . . . f . . b b . b . . . . . 
        . . . b . . . . . b . . . . . . 
        . . f . . . . . b . b . . . . . 
        . . . . . . . . . . b . . b . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . b . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        . . . . . . . . . . . . b b b b 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . f b b b b b . . . . . . . . 
        f b . . . . . b b . b . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        `,img`
        . . . . . . . . . . . . . . . . 
        f b f . . . . . b . . . . . . . 
        . . . b b b b b . . . . . . . . 
        . . . . . . . b b . b . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b b b . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . b b b . . 
        . . . . . . . . . . . . b . . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . . b . . 
        . . . . . . . . . . . . b b b . 
        `],
    350,
    false
    )
    escenario_planta_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b . . . . . . . 
        . . . b . b . . b . . . . . . . 
        . . . . b b b b . b . . . . . . 
        . . . . . b b b . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b . . . . . . . 
        . . . b . b . . b . . . . . . . 
        . . . . b b b b . b . . . . . . 
        . . . . . b b b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b . . . . . . . 
        . . . b . b . . b . . . . . . . 
        . . . . b b b b . b . . . . . . 
        . . . . . b b b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . b b . . . . . 
        . . . . . . . b . . b . b . . . 
        . . . . . . b . b b b b . . . . 
        . . . . . . . . b b b . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b . . b . . . . . 
        . . . . . b b . . b . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . b b b . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b . . b b . . . . . . 
        . . . . . . b . . b b . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . b . . b . . . . . . 
        . . . . . . b b b . b . . . . . 
        . . . . . . b b b . b . . . . . 
        `],
    380,
    false
    )
    escenario_planta_12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . b b . b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_12,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . b b . b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . b b . . b . . . . . . . 
        . . . . . b . . b . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b . . b . . . . . . . 
        . . . . . . b b . b . . . . . . 
        . . . . . . . b . . b . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . b b . b . . . . . . . . 
        . . . . . b . b . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . b b . b . . . . . . . 
        . . . . . b . . b . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b . . . . 
        . . . . . . b b . . b . . . . . 
        . . . . . b . . . b . . . . . . 
        `],
    380,
    false
    )
    escenario_panda_1 = sprites.create(img`
        ...ff..fffff..ff...
        ..fffffbbbbbfffff..
        ..fffbbbbbbbbbfff..
        ...fbbbbbbbbbbbf...
        ..fbbbbbbbbbbbbff..
        ..fbbbbbbbbbbbbbf..
        ..fbbbbbbbbbbbbbf..
        ..fbbbbbbbbbbbbbf..
        ..fffffffffffffff..
        .ffffffffffffffff..
        fffffbbbbbbbbbbbff.
        ffffbbbbbbbbbbbbbff
        fffbbbbbbbbbbbbbbbf
        .fbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        .ffbbbbbbbbbbbbbbf.
        ...ffffffffffffff..
        `, SpriteKind.panda_fondo1)
    animation.runImageAnimation(
    escenario_panda_1,
    [img`
        ...ff..fffff..ff...
        ..fffffbbbbbfffff..
        ..fffbbbbbbbbbfff..
        ...fbbbbbbbbbbbf...
        ..fbbbbbbbbbbbbff..
        ..fbbbbbbbbbbbbbf..
        ..fbbbbbbbbbbbbbf..
        ..fbbbbbbbbbbbbbf..
        ..fffffffffffffff..
        .ffffffffffffffff..
        fffffbbbbbbbbbbbff.
        ffffbbbbbbbbbbbbbff
        fffbbbbbbbbbbbbbbbf
        .fbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        ffbbbbbbbbbbbbbbbbf
        .ffbbbbbbbbbbbbbbf.
        ...ffffffffffffff..
        `,img`
        ..ff.fffff...ff....
        .ffffbbbbbffffff...
        .ffbbbbbbbbbbfff...
        .fbbbbbbbbbbbbf....
        .fbbbbbbbbbbbbbf...
        fbbbbbbbbbbbbbbf...
        fbbffbbbbfffbbbbf..
        fbffbbbbbbfffbbbf..
        fbffbbbbbbfffbbbf..
        fbbbbffbbbbffbbbf..
        fbbbbbbbbbbbbbffff.
        .ffbbbbbbbbbbfffff.
        .fbbbbbbbbbfffffff.
        .fffffffffffffbbbf.
        .fffffffffffbbbbbbf
        .fffbbbbbbbbbbbbbbf
        .fffbfffffbbbbbbbbf
        fffffffffffbbbbbff.
        fffffffffffbbbbf...
        .ffffffffffffff....
        `,img`
        ...ff..fffff..ff...
        ..fffffbbbbbfffff..
        ..fffbbbbbbbbbfff..
        ...fbbbbbbbbbbbf...
        ..fbbbbbbbbbbbbbf..
        ..fbbbbbbbbbbbbbf..
        .fbbbfffbbbfffbbbf.
        .fbbfffbbbbbfffbbf.
        .fbbffbbbbbbbffbbf.
        ..fbbbbbbffbbbbbf..
        ...ffffbbbbbbfff...
        ...fffffffffffff...
        ..fbffbbbbbbbffbf..
        ..fbffffbbbffffbf..
        ..fbbfffbbbfffbbf..
        ffffbbbbbbbbbbbffff
        ffffbbbbbbbbbbbffff
        ffffbbbbbbbbbbbffff
        ffffffbbbbbbbffffff
        .fffffffffffffffff.
        `,img`
        ..ff.fffff...ff....
        .ffffbbbbbffffff...
        .ffbbbbbbbbbbfff...
        .fbbbbbbbbbbbbf....
        .fbbbbbbbbbbbbbf...
        fbbbbbbbbbbbbbbf...
        fbbffbbbbfffbbbbf..
        fbffbbbbbbfffbbbf..
        fbffbbbbbbfffbbbf..
        fbbbbffbbbbffbbbf..
        fbbbbbbbbbbbbbffff.
        .ffbbbbbbbbbbfffff.
        .fbbbbbbbbbfffffff.
        .fffffffffffffbbbf.
        .fffffffffffbbbbbbf
        .fffbbbbbbbbbbbbbbf
        .fffbfffffbbbbbbbbf
        fffffffffffbbbbbff.
        fffffffffffbbbbf...
        .ffffffffffffff....
        `],
    500,
    false
    )
    escenario_camino_2 = sprites.create(img`
        ffffffffffff............ffffffffffff............ffffffffffff....................
        f33333333333fff.........f33333333333fff.........f33333333333fff.................
        f3333333333333fff.......f3333333333333fff.......f3333333333333fff...............
        ff333333333333333ff.....ff333333333333333ff.....ff333333333333333ff.............
        ..ff333333333333333ff.....ff333333333333333ff.....ff333333333333333ff...........
        ....ff333333333333333fff....ff333333333333333fff....ff333333333333333fff........
        ......ff3333333333333333ff....ff3333333333333333ff....ff3333333333333333ff......
        ........ff3333333333333333ff....ff3333333333333333ff....ff3333333333333333ff....
        ..........ff3333333333333333f.....ff3333333333333333f.....ff3333333333333333f...
        ............ff33333333333333f.......ff33333333333333f.......ff33333333333333f...
        ..............ff333333333333f.........ff333333333333f.........ff333333333333f...
        ................ffffffffffff............ffffffffffff............ffffffffffff....
        `, SpriteKind.Player)
    escenario_bambu_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_bambu_2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . 6 . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . 7 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 6 . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 6 . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 7 . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `],
    350,
    false
    )
    escenario_bambu_22 = sprites.create(img`
        . . . . . . . . . . . . . f 7 f 
        . . . . . . . 6 . . 6 7 6 . . . 
        . . . . . . . . 6 6 . . . . . . 
        . . . . . 6 . 6 7 . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 6 . 6 . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . 6 7 6 . . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_bambu_22,
    [img`
        . . . . . . . . . . . . . f 7 f 
        . . . . . . . 6 . . 6 7 6 . . . 
        . . . . . . . . 6 6 . . . . . . 
        . . . . . 6 . 6 7 . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 6 . 6 . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . 6 7 6 . . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . f 7 f 
        . . . . . . . . 6 7 6 7 6 . . . 
        . . . . . 6 . 6 7 . . . . . . . 
        . . . . . . 7 6 . . . . . . . . 
        . . . . . 6 . 6 . . . . . . . . 
        . . . . . 6 . . . . . . . . . . 
        . . . 6 6 7 . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . 6 7 6 7 6 f . . 
        . . . . . 6 . 6 7 . . . . . 6 f 
        . . . . . . 7 6 . . . . . . . . 
        . . . . . 6 . 6 . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . 6 7 6 . . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 6 7 . . . . . 
        . . . . . 6 . 6 7 . . f . . . . 
        . . . . . . 7 . . . . . 7 . . . 
        . . . . . 6 . 6 . . . . . f . . 
        . . 6 . . 7 . . . . . . . . . . 
        . . . 6 6 6 . . . . . . . . . . 
        . . . . 7 . 6 . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        6 7 6 6 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . 6 7 6 7 6 f . . 
        . . . . . 6 . 6 7 . . . . . 7 f 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . 6 . 6 . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . 6 7 6 . . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . f 7 f 
        . . . . . . . . 6 7 6 7 6 . . . 
        . . . . . 6 . 6 7 . . . . . . . 
        . . . . . . 7 6 . . . . . . . . 
        . . . . . 6 . 6 . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . 6 6 6 . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . . 6 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . . 6 . . . . . . . . . . . . . 
        . 6 7 6 . . . . . . . . . . . . 
        `],
    350,
    false
    )
    escenario_bambu_23 = sprites.create(img`
        f 7 f . . . . . . . . . . . . . 
        . . . 6 7 6 . . 6 . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . . 7 6 . 6 . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . 6 7 6 . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_bambu_23,
    [img`
        f 7 f . . . . . . . . . . . . . 
        . . . 6 7 6 . . 6 . . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . . . . 7 6 . 6 . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . 6 7 6 . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        f 7 f . . . . . 6 . . . . . . . 
        . . . 6 7 6 7 6 . . . . . . . . 
        . . . . . . . 7 6 . 6 . . . . . 
        . . . . . . . . 6 7 . . . . . . 
        . . . . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 6 . . . . . 
        . . . . . . . . . . 7 6 6 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . f 6 7 6 7 6 . . . . . . . . 
        f 6 . . . . . 7 6 . 6 . . . . . 
        . . . . . . . . 6 7 . . . . . . 
        . . . . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . 6 7 6 . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 6 . . . . . . . . . 
        . . . . f . . 7 6 . 6 . . . . . 
        . . . 7 . . . . . 7 . . . . . . 
        . . f . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 7 . . 6 . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . . . . . . . . 6 . 7 . . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        . . . . . . . . . . . . 6 6 7 6 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . f 6 7 6 7 6 . . . . . . . . 
        f 7 . . . . . 7 6 . 6 . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . 6 7 6 . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        f 7 f . . . . . 6 . . . . . . . 
        . . . 6 7 6 7 6 . . . . . . . . 
        . . . . . . . 7 6 . 6 . . . . . 
        . . . . . . . . 6 7 . . . . . . 
        . . . . . . . . 6 . 6 . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . 6 . . . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . 6 7 6 . . 
        . . . . . . . . . . . . 6 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . . 6 . . 
        . . . . . . . . . . . . 6 7 6 . 
        `],
    350,
    false
    )
    escenario_planta_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 3 . 3 . . . . . . . 
        . . . 3 . 7 . . 7 . . . . . . . 
        . . . . 7 7 7 7 . 3 . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 3 . 3 . . . . . . . 
        . . . 3 . 7 . . 7 . . . . . . . 
        . . . . 7 7 7 7 . 3 . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 . 3 . . . . . . . 
        . . . 3 . 7 . . 7 . . . . . . . 
        . . . . 7 7 7 7 . 3 . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . 3 7 . . . . . 
        . . . . . . . 7 . . 7 . 3 . . . 
        . . . . . . 3 . 7 7 7 7 . . . . 
        . . . . . . . . 7 7 7 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 3 . . 3 . . . . . 
        . . . . . 3 7 . . 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . . 3 7 . . . . . . 
        . . . . . . 7 . . 7 3 . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 7 . . 3 . . . . . . 
        . . . . . . 7 7 7 . 7 . . . . . 
        . . . . . 3 7 7 7 . 3 . . . . . 
        `],
    380,
    false
    )
    escenario_planta_21 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 . . . . . . 6 . . . . . . 
        . 6 6 6 . . . 6 6 . 6 6 . . . . 
        . . 6 . 6 6 . 6 . . 6 . . 6 6 6 
        . . 6 . . 6 . 6 . . 6 . . . 6 . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_21,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 . . . . . . 6 . . . . . . 
        . 6 6 6 . . . 6 6 . 6 6 . . . . 
        . . 6 . 6 6 . 6 . . 6 . . 6 6 6 
        . . 6 . . 6 . 6 . . 6 . . . 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 . . . 6 . 6 6 6 6 6 . 6 6 
        . 6 6 6 . 6 . . 6 . . 6 . . 6 . 
        . . 6 . 6 . . . 6 . . 6 . . 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . 6 6 6 . . . . . 6 
        . . . 6 6 6 . 6 6 . 6 6 6 . 6 . 
        . . . . 6 . 6 . 6 . . 6 . 6 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 . . . . . . 6 . . . . . . 
        . 6 6 6 . . . 6 6 . 6 6 . . . . 
        . . 6 . 6 6 . 6 . . 6 . . 6 6 6 
        . . 6 . . 6 . 6 . . 6 . . . 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 6 . . . . . . 6 . . . . . . . 
        6 6 6 . . 6 6 6 . 6 6 . . . . . 
        . 6 . 6 6 . . 6 . . 6 . 6 6 . . 
        . 6 . . 6 . . 6 . . 6 . . . 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 . . . . . . . 6 . . . . . 
        . . 6 6 6 . . 6 6 6 . 6 6 6 . . 
        . . . 6 . 6 6 . . 6 . . 6 . 6 . 
        . . . 6 . . 6 . . 6 . . 6 . . 6 
        `],
    500,
    false
    )
    escenario_planta_22 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 a 6 6 6 6 6 . . . 
        . . 6 6 a 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 a 6 6 a 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_22,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 a 6 6 6 6 6 . . . 
        . . 6 6 a 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 a 6 6 a 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . 6 6 6 6 a 6 6 6 . . . . . 
        . . 6 6 a 6 6 6 6 6 6 . . . . . 
        . . 6 6 6 6 a 6 6 a 6 . . . . . 
        . 6 6 6 6 6 6 6 6 6 6 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 6 6 a 6 6 . . . . . . 
        . . 6 6 a 6 6 6 6 6 . . . . . . 
        . 6 6 6 6 6 a 6 6 a . . . . . . 
        6 6 6 6 6 6 6 6 6 6 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . 6 6 6 6 6 a 6 6 6 6 6 . . . 
        . . 6 6 a 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 a 6 6 a 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 6 a 6 6 6 6 . . . 
        . . . . . 6 6 6 6 6 6 a 6 6 . . 
        . . . . . 6 a 6 6 a 6 6 6 6 . . 
        . . . . . 6 6 6 6 6 6 6 6 6 6 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 a 6 6 6 6 . . . 
        . . . . . . 6 6 6 6 6 a 6 6 . . 
        . . . . . . a 6 6 a 6 6 6 6 6 . 
        . . . . . . 6 6 6 6 6 6 6 6 6 6 
        `],
    500,
    false
    )
    escenario_planta_23 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . 6 . 6 . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_23,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . 6 . 6 . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 6 . 6 . 6 . . . 
        . . . . . . . . . 6 6 6 . . . . 
        . . . . . . . . . 6 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 . 6 . 6 . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 . 6 . 6 . . . . . . . . 
        . . . . 6 6 6 . . . . . . . . . 
        . . . . . . 6 . . . . . . . . . 
        `],
    500,
    false
    )
    escenario_camino_3 = sprites.create(img`
        ffffffffffff............ffffffffffff............ffffffffffff....................
        f55555555555fff.........f55555555555fff.........f55555555555fff.................
        f5555555555555fff.......f5555555555555fff.......f5555555555555fff...............
        ff555555555555555ff.....ff555555555555555ff.....ff555555555555555ff.............
        ..ff555555555555555ff.....ff555555555555555ff.....ff555555555555555ff...........
        ....ff555555555555555fff....ff555555555555555fff....ff555555555555555fff........
        ......ff5555555555555555ff....ff5555555555555555ff....ff5555555555555555ff......
        ........ff5555555555555555ff....ff5555555555555555ff....ff5555555555555555ff....
        ..........ff5555555555555555f.....ff5555555555555555f.....ff5555555555555555f...
        ............ff55555555555555f.......ff55555555555555f.......ff55555555555555f...
        ..............ff555555555555f.........ff555555555555f.........ff555555555555f...
        ................ffffffffffff............ffffffffffff............ffffffffffff....
        `, SpriteKind.Player)
    escenario_bambu_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . f c f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_bambu_3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . f c f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . c . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . f c f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . 7 c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . f c f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . c 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 c . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `],
    350,
    false
    )
    escenario_bambu_31 = sprites.create(img`
        f c f . . . . . . . . . . . . . 
        . . . 7 c 7 . . 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . c 7 . 7 . . . . . 
        . . . . . . . . . c . . . . . . 
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . . 7 c 7 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_bambu_31,
    [img`
        f c f . . . . . . . . . . . . . 
        . . . 7 c 7 . . 7 . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . c 7 . 7 . . . . . 
        . . . . . . . . . c . . . . . . 
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . . 7 c 7 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        f c f . . . . . 7 . . . . . . . 
        . . . 7 c 7 c 7 . . . . . . . . 
        . . . . . . . c 7 . 7 . . . . . 
        . . . . . . . . 7 c . . . . . . 
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . 7 . . . . . 
        . . . . . . . . . . c 7 7 . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . f 7 c 7 c 7 . . . . . . . . 
        f 7 . . . . . c 7 . 7 . . . . . 
        . . . . . . . . 7 c . . . . . . 
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . . 7 c 7 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c 7 . . . . . . . . . 
        . . . . f . . c 7 . 7 . . . . . 
        . . . c . . . . . c . . . . . . 
        . . f . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . c . . 7 . . 
        . . . . . . . . . . 7 7 7 . . . 
        . . . . . . . . . 7 . c . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        . . . . . . . . . . . . 7 7 c 7 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . f 7 c 7 c 7 . . . . . . . . 
        f c . . . . . c 7 . 7 . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . . 7 c 7 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        f c f . . . . . 7 . . . . . . . 
        . . . 7 c 7 c 7 . . . . . . . . 
        . . . . . . . c 7 . 7 . . . . . 
        . . . . . . . . 7 c . . . . . . 
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . . 7 7 7 . . . 
        . . . . . . . . . . . c . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . 7 c 7 . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . . . . c . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . . . . . . . . . 7 c 7 . 
        `],
    350,
    false
    )
    animation.runImageAnimation(
    escenario_bambu32,
    [img`
        . . . . . . . . . . . . . f c f 
        . . . . . . . 7 . . 7 c 7 . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . 7 . 7 c . . . . . . . 
        . . . . . . c . . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . 7 c 7 . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . c . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . f c f 
        . . . . . . . . 7 c 7 c 7 . . . 
        . . . . . 7 . 7 c . . . . . . . 
        . . . . . . c 7 . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . 7 . . . . . . . . . . 
        . . . 7 7 c . . . . . . . . . . 
        . . . . c . . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . 7 c 7 c 7 f . . 
        . . . . . 7 . 7 c . . . . . 7 f 
        . . . . . . c 7 . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . 7 c 7 . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . c . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 7 c . . . . . 
        . . . . . 7 . 7 c . . f . . . . 
        . . . . . . c . . . . . c . . . 
        . . . . . 7 . 7 . . . . . f . . 
        . . 7 . . c . . . . . . . . . . 
        . . . 7 7 7 . . . . . . . . . . 
        . . . . c . 7 . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        7 c 7 7 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . 7 c 7 c 7 f . . 
        . . . . . 7 . 7 c . . . . . c f 
        . . . . . . c c . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . 7 c 7 . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . c . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . f c f 
        . . . . . . . . 7 c 7 c 7 . . . 
        . . . . . 7 . 7 c . . . . . . . 
        . . . . . . c 7 . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . 7 7 7 . . . . . . . . . . 
        . . . . c . . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        `],
    350,
    false
    )
    escenario_planta_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . a . . . . . 
        . . . a 3 a . a . a 3 a . . . . 
        . . . . a . a 3 a . a . . . . . 
        . . . . . 7 . a . 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . a . . . . . 
        . . . a 3 a . a . a 3 a . . . . 
        . . . . a . a 3 a . a . . . . . 
        . . . . . 7 . a . 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a . . . . . . . 
        . . . . . a . a 3 a . . a . . . 
        . . . . a 3 a . a . . a 3 a . . 
        . . . . . a . . 7 . . . a . . . 
        . . . . . 7 . . 7 . . . 7 . . . 
        . . . . . 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . 7 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . a . . . . . 
        . . . a 3 a . a . a 3 a . . . . 
        . . . . a . a 3 a . a . . . . . 
        . . . . . 7 . a . 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . a . . a 3 a . a . . . . . 
        . . a 3 a . . a . a 3 a . . . . 
        . . . a . . . 7 . . a . . . . . 
        . . . 7 . . . 7 . . 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `],
    500,
    false
    )
    escenario_planta_31 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 . . . . . . 
        . . 1 . . . . . 1 3 1 . . . . . 
        . 1 3 1 . . . . . 1 . . . . 1 . 
        . 7 1 7 . . . 7 7 . 7 7 . 1 3 1 
        . . 7 . 7 7 . 7 . . 7 . . 7 1 7 
        . . 7 . . 7 . 7 . . 7 . . . 7 . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_31,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 . . . . . . 
        . . 1 . . . . . 1 3 1 . . . . . 
        . 1 3 1 . . . . . 1 . . . . 1 . 
        . 7 1 7 . . . 7 7 . 7 7 . 1 3 1 
        . . 7 . 7 7 . 7 . . 7 . . 7 1 7 
        . . 7 . . 7 . 7 . . 7 . . . 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 . . . . . . 
        . . . . . 1 . . 1 3 1 . . . 1 . 
        . . . . 1 3 1 . . 1 . . . 1 3 1 
        . . . 7 7 1 . . . 7 . 7 7 . 1 . 
        . . . 7 . . 7 7 . 7 . 7 . 7 7 . 
        . . . 7 . . 7 . . 7 . 7 . 7 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 . . . . . . 
        . . 1 . . . . . 1 3 1 . . . . . 
        . 1 3 1 . . . . . 1 . . . . 1 . 
        . 7 1 7 . . . 7 7 . 7 7 . 1 3 1 
        . . 7 . 7 7 . 7 . . 7 . . 7 1 7 
        . . 7 . . 7 . 7 . . 7 . . . 7 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . 1 . . . 1 3 1 . . 1 . . . . . 
        1 3 1 . . . 1 . . 1 3 1 . . . . 
        . 1 . 7 7 . 7 . . . 1 7 7 . . . 
        . 7 7 . 7 . 7 . 7 7 . . 7 . . . 
        . . 7 . 7 . 7 . . 7 . . 7 . . . 
        `],
    500,
    false
    )
    escenario_planta_32 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . 3 . 3 . . . . . . 
        . . . . . 7 . 7 . 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    escenario_planta_32,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . 3 . 3 . . . . . . 
        . . . . . 7 . 7 . 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . 3 . . . 
        . . . . . . . . 7 3 . 7 . . . . 
        . . . . . . . . 7 7 7 . . . . . 
        . . . . . . . . . 7 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . . 3 7 . 3 . . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . . . 7 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . 3 . 3 . . . . . . 
        . . . . . 7 . 7 . 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . 3 . . . . . . . . 
        . . . . 7 . 3 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . 3 . 7 3 . . . . . . . . 
        . . . . 7 7 7 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    false
    )
    escenario_bambu32 = sprites.create(img`
        . . . . . . . . . . . . . f c f 
        . . . . . . . 7 . . 7 c 7 . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . 7 . 7 c . . . . . . . 
        . . . . . . c . . . . . . . . . 
        . . . . . 7 . 7 . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . 7 c 7 . . . . . . . . . . 
        . . . . 7 . . . . . . . . . . . 
        . . . . c . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . 7 c 7 . . . . . . . . . . . 
        . . . 7 . . . . . . . . . . . . 
        . . c . . . . . . . . . . . . . 
        . . 7 . . . . . . . . . . . . . 
        . 7 c 7 . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.conejo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    pause(randint(5000, 10000))
    Conejo()
})
function Conejo2 () {
    for (let spawnconejo2 of tiles.getTilesByType(grafxkid.winterBush)) {
        Conejo_zombie_2 = sprites.create(img`
            ..............................
            ............c...2.............
            ............c...2.............
            ..........222.cc2.............
            ..........cc.cc...............
            .........cc..c................
            .........c2ccc................
            .......ac2f22c................
            .......cc2222c22222...........
            .......7cccccc2c2c2c..........
            ....f..7....cc2c2c2c2.........
            ....ff.7....222c2c2c..........
            .....fff....2.2c2c2...........
            ............2.c.2.c...........
            ..............................
            ..............................
            `, SpriteKind.conejo2)
        tiles.placeOnTile(Conejo_zombie_2, spawnconejo2)
        animation.runImageAnimation(
        Conejo_zombie_2,
        [img`
            ..............................
            ............3...2.............
            ............3...2.............
            ..........222.332.............
            ..........33.33...............
            .........33..3................
            .........32333................
            .......a32f223................
            .......332222322222...........
            .......7333333232323..........
            ....f..7....332323232.........
            ....ff.7....22232323..........
            .....fff....2.23232...........
            ............2.3.2.3...........
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............3..2............
            ............223..2............
            ............332332............
            ...........33.33..............
            ...........3233...............
            ........a32f223...............
            .....ff.3322223222222.........
            ......f.7333333232332.........
            .....f..73333223323322........
            .....ff.7..2222332332.........
            ......fff..2..2332332.........
            ...........2..3..2..3.........
            ..............................
            ..............................
            `],
        200,
        true
        )
        Conejo_zombie_2.ay = 1500
        Conejo_zombie_2.follow(ninja, 80)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.conejo, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    pause(randint(5000, 10000))
    Conejo()
})
scene.onOverlapTile(SpriteKind.conejo2, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(Conejo_zombie_2, effects.fire, 500)
    Conejo2()
})
function Conejo () {
    for (let spawnconejo3 of tiles.getTilesByType(grafxkid.springBush)) {
        conejo_Zombie = sprites.create(img`
            ..............................
            ............c...2.............
            ............c...2.............
            ..........222.cc2.............
            ..........cc.cc...............
            .........cc..c................
            .........c2ccc................
            .......ac2f22c................
            .......cc2222c22222...........
            .......7cccccc2c2c2c..........
            ....f..7....cc2c2c2c2.........
            ....ff.7....222c2c2c..........
            .....fff....2.2c2c2...........
            ............2.c.2.c...........
            ..............................
            ..............................
            `, SpriteKind.conejo)
        tiles.placeOnTile(conejo_Zombie, spawnconejo3)
        animation.runImageAnimation(
        conejo_Zombie,
        [img`
            ..............................
            ............3...2.............
            ............3...2.............
            ..........222.332.............
            ..........33.33...............
            .........33..3................
            .........32333................
            .......a32f223................
            .......332222322222...........
            .......7333333232323..........
            ....f..7....332323232.........
            ....ff.7....22232323..........
            .....fff....2.23232...........
            ............2.3.2.3...........
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............3..2............
            ............223..2............
            ............332332............
            ...........33.33..............
            ...........3233...............
            ........a32f223...............
            .....ff.3322223222222.........
            ......f.7333333232332.........
            .....f..73333223323322........
            .....ff.7..2222332332.........
            ......fff..2..2332332.........
            ...........2..3..2..3.........
            ..............................
            ..............................
            `],
        200,
        true
        )
        conejo_Zombie.ay = 1500
        conejo_Zombie.follow(ninja, 80)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    buey,
    [img`
        .........................
        .........................
        .........................
        .........................
        .........................
        ............eeee.......f.
        ...........eeeeee....ff..
        ..........eeeeeeee..ff..f
        .........eeeeeeeeeeff..ff
        .......eeeeeeeeeeeeeeeff.
        ......eeeeeeeeeeeee1e1e..
        ...feeeeeeeeeeeeeeeeeee..
        .....eeeeeeeeeeeeee5555..
        ......eeeeeeeeeeeee5555..
        .......eeeeeeeeeee..55...
        .......eeeeeee...........
        .......eeeeeee...........
        .......eeeeeee...........
        .......e.e.e.e...........
        .......f.f.f.f...........
        `,img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        ............eeee.......f.
        ...........eeeeee....ff..
        ..........eeeeeeee..ff..f
        .........eeeeeeeeeeff..ff
        .......eeeeeeeeeeeeeeeff.
        ...feeeeeeeeeeeeeee1e1e..
        .....eeeeeeeeeeeeeeeeee..
        ......eeeeeeeeeeeee5555..
        ......eeeeeeeeeeeee5555..
        .......eeeeeeeeeee..55...
        .......eeeeeee...........
        .......eeeeeee...........
        .......eeeeeee...........
        .......f.f.f.f...........
        `,img`
        .........................
        .........................
        .........................
        ............eeee.......f.
        ...........eeeeee....ff..
        ..........eeeeeeee..ff..f
        .........eeeeeeeeeeff..ff
        .......eeeeeeeeeeeeeeeff.
        ......eeeeeeeeeeeee1e1e..
        ......eeeeeeeeeeeeeeeee..
        ......eeeeeeeeeeeee5555..
        ...feeeeeeeeeeeeeee5555..
        .....e.eeeeeeeeeee..55...
        .......eeeeeee...........
        .......eeeeeee...........
        .......eeeeeee...........
        ........e.e.ee...........
        .......e.e.e.e...........
        .......e.e.e.e...........
        .......f.f.f.f...........
        `,img`
        .........................
        ........................f
        ......................fff
        .....................f.f.
        .....................f.f.
        .ff..................f...
        f.ff................ff...
        ...f...e..........ff.....
        ...f..ee.........ff......
        ....f......444..ff.......
        ........444454...........
        ...f....453334...........
        ........444334...........
        .......e..4444...........
        .......e.................
        .......e.................
        ........e.e.ee...........
        .......e.e.e.e...........
        .......e.e.e.e...........
        .......f.f.f.f...........
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..ff.....................
        ...f......4444...2.e.....
        ...f..222222222222.......
        ...f...24242222442.......
        ...ff..24224442222.....e.
        ....f..24445554222.......
        ....ff.24455555442.......
        .......245533335522......
        ......2245333335542......
        ......2445333335422ff....
        ......244453335442..ff...
        ......224245555442...f...
        ........2222444422.e.ff..
        ...........222222..e..f..
        ...............22.....f..
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        ........2222222222.......
        .......2aaaa2222222...11.
        .......2a88a222222211111.
        .......2a88a222222211111.
        .......2aaaa2222222...11.
        ........2222222222.......
        .........................
        .........................
        `],
    100,
    false
    )
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    pause(randint(5000, 10000))
    Buey()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.fire, 500)
    animation.runImageAnimation(
    buey,
    [img`
        .........................
        .........................
        .........................
        .........................
        .........................
        ............eeee.......f.
        ...........eeeeee....ff..
        ..........eeeeeeee..ff..f
        .........eeeeeeeeeeff..ff
        .......eeeeeeeeeeeeeeeff.
        ......eeeeeeeeeeeee1e1e..
        ...feeeeeeeeeeeeeeeeeee..
        .....eeeeeeeeeeeeee5555..
        ......eeeeeeeeeeeee5555..
        .......eeeeeeeeeee..55...
        .......eeeeeee...........
        .......eeeeeee...........
        .......eeeeeee...........
        .......e.e.e.e...........
        .......f.f.f.f...........
        `,img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        ............eeee.......f.
        ...........eeeeee....ff..
        ..........eeeeeeee..ff..f
        .........eeeeeeeeeeff..ff
        .......eeeeeeeeeeeeeeeff.
        ...feeeeeeeeeeeeeee1e1e..
        .....eeeeeeeeeeeeeeeeee..
        ......eeeeeeeeeeeee5555..
        ......eeeeeeeeeeeee5555..
        .......eeeeeeeeeee..55...
        .......eeeeeee...........
        .......eeeeeee...........
        .......eeeeeee...........
        .......f.f.f.f...........
        `,img`
        .........................
        .........................
        .........................
        ............eeee.......f.
        ...........eeeeee....ff..
        ..........eeeeeeee..ff..f
        .........eeeeeeeeeeff..ff
        .......eeeeeeeeeeeeeeeff.
        ......eeeeeeeeeeeee1e1e..
        ......eeeeeeeeeeeeeeeee..
        ......eeeeeeeeeeeee5555..
        ...feeeeeeeeeeeeeee5555..
        .....e.eeeeeeeeeee..55...
        .......eeeeeee...........
        .......eeeeeee...........
        .......eeeeeee...........
        ........e.e.ee...........
        .......e.e.e.e...........
        .......e.e.e.e...........
        .......f.f.f.f...........
        `,img`
        .........................
        ........................f
        ......................fff
        .....................f.f.
        .....................f.f.
        .ff..................f...
        f.ff................ff...
        ...f...e..........ff.....
        ...f..ee.........ff......
        ....f......444..ff.......
        ........444454...........
        ...f....453334...........
        ........444334...........
        .......e..4444...........
        .......e.................
        .......e.................
        ........e.e.ee...........
        .......e.e.e.e...........
        .......e.e.e.e...........
        .......f.f.f.f...........
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..ff.....................
        ...f......4444...2.e.....
        ...f..222222222222.......
        ...f...24242222442.......
        ...ff..24224442222.....e.
        ....f..24445554222.......
        ....ff.24455555442.......
        .......245533335522......
        ......2245333335542......
        ......2445333335422ff....
        ......244453335442..ff...
        ......224245555442...f...
        ........2222444422.e.ff..
        ...........222222..e..f..
        ...............22.....f..
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        ........2222222222.......
        .......2aaaa2222222...11.
        .......2a88a222222211111.
        .......2a88a222222211111.
        .......2aaaa2222222...11.
        ........2222222222.......
        .........................
        .........................
        `],
    100,
    false
    )
    pause(randint(5000, 10000))
    Buey()
})
let escenario_planta_32: Sprite = null
let escenario_planta_31: Sprite = null
let escenario_planta_3: Sprite = null
let escenario_bambu32: Sprite = null
let escenario_bambu_31: Sprite = null
let escenario_bambu_3: Sprite = null
let escenario_camino_3: Sprite = null
let escenario_planta_23: Sprite = null
let escenario_planta_22: Sprite = null
let escenario_planta_21: Sprite = null
let escenario_planta_2: Sprite = null
let escenario_bambu_23: Sprite = null
let escenario_bambu_22: Sprite = null
let escenario_bambu_2: Sprite = null
let escenario_camino_2: Sprite = null
let escenario_panda_1: Sprite = null
let escenario_planta_12: Sprite = null
let escenario_planta_1: Sprite = null
let escenario_bambu_13: Sprite = null
let escenario_bambu_12: Sprite = null
let escenario_1_bambu: Sprite = null
let boton_de_inicio: Sprite = null
let Titulo: Sprite = null
let projectile: Sprite = null
let Numero_de_saltos = 0
let statusbar: StatusBarSprite = null
let fucanlong: Sprite = null
let Conejo_zombie_2: Sprite = null
let conejo_Zombie: Sprite = null
let direccion = 0
let buey: Sprite = null
let Conejo_zombie_3: Sprite = null
let ninja: Sprite = null
let botonB = 0
let botonA = 0
let pantallatituloon = false
let moverse = false
pantallatituloon = true
botonA = 1
botonB = 1
catadepresentacion()
game.onUpdate(function () {
    if (info.score() >= 1) {
        for (let mundo2 of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.setTileAt(mundo2, assets.tile`myTile3`)
        }
    }
})
