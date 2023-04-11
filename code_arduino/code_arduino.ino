//////////////////////////////// RFID ///////////////////////////////////////
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 21
#define RST_PIN 22

byte CodeVerif=0; 
byte Code_Acces[4]={0xD3, 0xA6, 0x7D, 0x2E};     

MFRC522 rfid(SS_PIN, RST_PIN); // Instance of the class

// Init array that will store new NUID 
byte nuidPICC[4];

//////////////////////////////// KEYPAD ///////////////////////////////////////
#include <Keypad.h>

#define ROW_NUM     4 // four rows
#define COLUMN_NUM  4 // four columns
#define keyPadAccesFlag_PIN 2
#define keyPadGate_PIN 3
#define keyPadMax_Acces 3

byte keyPadCount_acces=0; 
byte keyPadCodeVerif=0; 
byte keyPadCode_Acces ='1234';

char keys[ROW_NUM][COLUMN_NUM] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

byte pin_rows[ROW_NUM]      = {19, 18, 5, 17}; // GIOP19, GIOP18, GIOP5, GIOP17 connect to the row pins
byte pin_column[COLUMN_NUM] = {16, 4, 0, 2};   // GIOP16, GIOP4, GIOP0, GIOP2 connect to the column pins

Keypad keypad = Keypad( makeKeymap(keys), pin_rows, pin_column, ROW_NUM, COLUMN_NUM );


void setup() 
{ 
  //////////////////////////////// RFID ///////////////////////////////////////
  // Init RS232
  Serial.begin(115200);

  // Init SPI bus
  SPI.begin(); 

  // Init MFRC522 
  rfid.PCD_Init(); 
  
//////////////////////////////// KEYPAD ///////////////////////////////////////
 // Init LEDs 
  pinMode(keyPadAccesFlag_PIN, OUTPUT);
  pinMode(keyPadGate_PIN, OUTPUT);
  
  digitalWrite(keyPadAccesFlag_PIN, LOW);
  digitalWrite(keyPadGate_PIN, LOW);
  
}
 
void loop() 
{
  //////////////////////////////// RFID ///////////////////////////////////////
  // Initialisé la boucle si aucun badge n'est présent 
  if ( !rfid.PICC_IsNewCardPresent())
    return;

  // Vérifier la présence d'un nouveau badge 
  if ( !rfid.PICC_ReadCardSerial())
    return;

  for (byte i = 0; i < 4; i++) {
    nuidPICC[i] = rfid.uid.uidByte[i];
  }

  // Affichage de l'identifiant 

  for (byte i = 0; i < 4; i++) 
  {
     Serial.print(nuidPICC[i]);
   // Serial.print(nuidPICC[i], HEX);
    
  }
  Serial.println();

  // Re-Init RFID
  rfid.PICC_HaltA(); // Halt PICC
  rfid.PCD_StopCrypto1(); // Stop encryption on PCD

//////////////////////////////// KEYPAD ///////////////////////////////////////
 
  char key = keypad.getKey();

  if (key) {
    Serial.println(key);
  }
  // Vérification du code 
 
  if(keyPadCode_Acces == key){
    keyPadCodeVerif = 1;
  }
  if (keyPadCodeVerif!=1)
  {
    keyPadCount_acces+=1;
    if(keyPadCount_acces == keyPadMax_Acces)
    {
     // Dépassement des tentatives (clignotement infinie) 
     while(1)
     {
      digitalWrite(keyPadAccesFlag_PIN, HIGH);
      delay(200); 
      digitalWrite(keyPadAccesFlag_PIN, LOW);
      delay(200); 
      // Affichage 
      Serial.println("Alarme!");
     }
    }
    else
    {
      // Affichage 
      Serial.println("Code érroné");
    
      // Un seul clignotement: Code erroné 
      digitalWrite(keyPadAccesFlag_PIN, HIGH);
      delay(1000); 
      digitalWrite(keyPadAccesFlag_PIN, LOW);
    }
  }
  else
  {
    // Affichage 
    Serial.println("Ouverture de la porte");
    
    // Ouverture de la porte & Initialisation 
    digitalWrite(keyPadGate_PIN, HIGH);
    delay(3000); 
    digitalWrite(keyPadGate_PIN, LOW);
    keyPadCount_acces=0; 
  }

}
