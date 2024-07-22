

int sw_pin = 3;

#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); // set the LCD address to 0x27 for a 16 chars and 2 line display

void setup()
{
  lcd.init();         // initialize the lcd
  lcd.backlight();    // Turn on the LCD screen backlight

  Serial.begin(9600);
  pinMode(3, INPUT);
  digitalWrite(3, HIGH);
}

void loop()
{
  lcd.setCursor(6, 0);
  lcd.print("Hola");

  int sw_data = digitalRead(3);
  Serial.print("sw_data: ");
  Serial.println(sw_data);
  delay(100);
}



 static byte graphics[] = {
    //  Run position 1
    0b00000,
    0b00000,
    0b00100,
    0b11110,
    0b11110,
    0b11111,
    0b01001,
    0b00000,
    // Run position  2
    0b00000,
    0b00000,
    0b00100,
    0b11110,
    0b11110,
    0b11111,
    0b01001,
    0b00000,
    // Jump
    0b00000,
    0b00000,
    0b00100,
    0b11110,
    0b11110,
    0b11111,
    0b01001,
    0b00000,
    // Jump lower
    0b00000,
    0b00000,
    0b00100,
    0b11110,
    0b11110,
    0b11111,
    0b01001,
    0b00000,
    // Ground
    0b01110,
    0b11111,
    0b10101,
    0b11111,
    0b10101,
    0b11111,
    0b10101,
    0b11111,
    // Ground right
    0b01110,
    0b11111,
    0b10101,
    0b11111,
    0b10101,
    0b11111,
    0b10101,
    0b11111,
    // Ground left
    0b01110,
    0b11111,
    0b10101,
    0b11111,
    0b10101,
    0b11111,
    0b10101,
    0b11111,
  };