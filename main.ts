/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah Yang
 * Created on: March 4
 * This program operates traffic lights
*/

// the variables 
let myNeopixelStrip: neopixel.Strip = null

// setting up the lights
basic.clearScreen()
myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.show()
basic.showIcon(IconNames.Happy)

// running the traffic lights
basic.clearScreen()
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    myNeopixelStrip.show()
    basic.pause(2000)
    myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.show()
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    myNeopixelStrip.show()
    basic.pause(2000)
    myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.show()
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    myNeopixelStrip.show()
    basic.pause(2000)
    myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    myNeopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})

// resetting the traffic lights
basic.clearScreen()
input.onButtonPressed(Button.B, function () {
myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myNeopixelStrip.show()
basic.showIcon(IconNames.Happy)
})