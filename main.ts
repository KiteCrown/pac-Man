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
let mySprite: Sprite = null
let imageList = [0, 1]
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
let ghost = sprites.create(img`
    . . . . . . 
    . . . . . . 
    . . . . . . 
    . . . . . . 
    . . . . . . 
    . . . . . . 
    `, SpriteKind.Enemy)
