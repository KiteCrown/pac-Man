namespace SpriteKind {
    export const weak = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.vx = -30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(28, 11))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -30
    animation.runImageAnimation(
    mySprite,
    [img`
        . 5 . . 5 . 
        5 5 . . 5 5 
        5 5 . . 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `,img`
        . 5 . . 5 . 
        5 5 . . 5 5 
        5 5 . . 5 5 
        5 5 . . 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    info.changeScoreBy(30)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.vx = 30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 18))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -30
    animation.runImageAnimation(
    mySprite,
    [img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        . . . 5 5 5 
        . . . 5 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        . . . . 5 5 
        . . . . 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.vx = -30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(29, 18))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 30
    animation.runImageAnimation(
    mySprite,
    [img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 5 . . . 
        5 5 5 . . . 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 . . . . 
        5 5 . . . . 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    info.changeScoreBy(100)
    info.changeLifeBy(1)
    pause(1000)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 30
    animation.runImageAnimation(
    mySprite,
    [img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 . . 5 5 
        5 5 . . 5 5 
        . 5 . . 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 . . 5 5 
        5 5 . . 5 5 
        5 5 . . 5 5 
        . 5 . . 5 . 
        `,img`
        . 5 5 5 5 . 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        5 5 5 5 5 5 
        . 5 5 5 5 . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.vx = 30
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite.vx == 20 && mySprite.x < otherSprite.x) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        info.changeScoreBy(500)
        pause(1000)
    } else {
        info.changeLifeBy(-1)
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
    }
    if (otherSprite.vx == -20 && mySprite.x > otherSprite.x) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        info.changeScoreBy(500)
        pause(1000)
    } else {
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
    }
    if (otherSprite.vy == -20 && mySprite.y > otherSprite.y) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        info.changeScoreBy(500)
        pause(1000)
    } else {
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
    }
    if (otherSprite.vy == 20 && mySprite.y < otherSprite.y) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        info.changeScoreBy(500)
        pause(1000)
    } else {
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
    }
})
let enemyOverlapY = 0
let enemyOverlapX = 0
let ghost: Sprite = null
let mySprite: Sprite = null
let enemyFlee = 0
let imageList = [
img`
    . 2 2 2 2 2 . 
    2 2 2 2 2 2 2 
    2 1 8 2 8 1 2 
    2 1 8 2 8 1 2 
    2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 
    2 . 2 . 2 . 2 
    `,
img`
    . 9 9 9 9 9 . 
    9 9 9 9 9 9 9 
    9 1 8 9 8 1 9 
    9 1 8 9 8 1 9 
    9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 
    9 . 9 . 9 . 9 
    `,
img`
    . 5 5 5 5 5 . 
    5 5 5 5 5 5 5 
    5 1 8 5 8 1 5 
    5 1 8 5 8 1 5 
    5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 
    5 . 5 . 5 . 5 
    `,
img`
    . 7 7 7 7 7 . 
    7 7 7 7 7 7 7 
    7 1 8 7 8 1 7 
    7 1 8 7 8 1 7 
    7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 
    7 . 7 . 7 . 7 
    `
]
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 242
    export const ARCADE_SCREEN_HEIGHT = 256
}
info.setLife(3)
spriteutils.setLifeImage(img`
    . . f f f f . . 
    . f 5 5 5 5 f . 
    f 5 5 5 5 5 5 f 
    f 5 5 5 . . . . 
    f 5 5 5 . . . . 
    f 5 5 5 5 5 5 f 
    . f 5 5 5 5 f . 
    . . f f f f . . 
    `)
mySprite = sprites.create(img`
    . 5 5 5 5 . 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    . 5 5 5 5 . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 4))
for (let index = 0; index < 10; index++) {
    ghost = sprites.create(imageList._pickRandom(), SpriteKind.Enemy)
    ghost.vx = 20
    tiles.placeOnRandomTile(ghost, assets.tile`myTile6`)
}
game.onUpdate(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value2.isHittingTile(CollisionDirection.Top)) {
            enemyOverlapX = randint(0, 1)
            if (enemyOverlapX == 0) {
                value2.vx = -20
            } else {
                value2.vx = 20
            }
        }
        if (value2.isHittingTile(CollisionDirection.Bottom)) {
            enemyOverlapX = randint(0, 1)
            if (enemyOverlapX == 0) {
                value2.vx = -20
            } else {
                value2.vx = 20
            }
        }
        if (value2.isHittingTile(CollisionDirection.Left)) {
            enemyOverlapY = randint(0, 1)
            if (enemyOverlapY == 0) {
                value2.vy = -20
            } else {
                value2.vy = 20
            }
        }
        if (value2.isHittingTile(CollisionDirection.Right)) {
            enemyOverlapY = randint(0, 1)
            if (enemyOverlapY == 0) {
                value2.vy = -20
            } else {
                value2.vy = 20
            }
        }
    }
})
