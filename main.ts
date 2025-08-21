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
let enemyPath: tiles.Location[] = []
let ghost: Sprite = null
let mySprite: Sprite = null
let enemyOverlapX = 0
let enemyOverlapY = 0
let imageList = [
img`
    . 2 2 2 2 2 . 
    2 2 2 2 2 2 2 
    2 1 f 2 f 1 2 
    2 1 f 2 f 1 2 
    2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 
    2 . 2 . 2 . 2 
    `,
img`
    . 9 9 9 9 9 . 
    9 9 9 9 9 9 9 
    9 1 f 9 f 1 9 
    9 1 f 9 f 1 9 
    9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 
    9 . 9 . 9 . 9 
    `,
img`
    . 5 5 5 5 5 . 
    5 5 5 5 5 5 5 
    5 1 f 5 f 1 5 
    5 1 f 5 f 1 5 
    5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 
    5 . 5 . 5 . 5 
    `,
img`
    . 7 7 7 7 7 . 
    7 7 7 7 7 7 7 
    7 1 f 7 f 1 7 
    7 1 f 7 f 1 7 
    7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 
    7 . 7 . 7 . 7 
    `
]
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 242
    export const ARCADE_SCREEN_HEIGHT = 240
}
mySprite = sprites.create(img`
    . 5 5 5 5 . 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    5 5 5 5 5 5 
    . 5 5 5 5 . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 3))
for (let index = 0; index < 6; index++) {
    ghost = sprites.create(imageList._pickRandom(), SpriteKind.Enemy)
    tiles.placeOnRandomTile(ghost, assets.tile`myTile0`)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Top)) {
            enemyOverlapX = randint(0, 1)
            if (enemyOverlapX == 0) {
                value.vx = -20
            } else {
                value.vx = 20
            }
        } else if (value.isHittingTile(CollisionDirection.Bottom)) {
            enemyOverlapX = randint(0, 1)
            if (enemyOverlapX == 0) {
                value.vx = -20
            } else {
                value.vx = 20
            }
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            enemyOverlapY = randint(0, 1)
            if (enemyOverlapY == 0) {
                value.vy = -20
            } else {
                value.vy = 20
            }
        } else {
            enemyOverlapY = randint(0, 1)
            if (enemyOverlapY == 0) {
                value.vy = -20
            } else {
                value.vy = 20
            }
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        enemyPath = scene.aStar(value.tilemapLocation(), mySprite.tilemapLocation())
        scene.followPath(value, enemyPath, 50)
    }
})
