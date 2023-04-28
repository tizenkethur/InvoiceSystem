Feladat leírása

A feladat célja egy egyszerű, számlakezelő rendszer létrehozása. A felhasználó a neve és jelszava
megadásával tudjon belépni az oldalra. A felhasználó adatait a regisztráció után adatbázisban
tároljuk. Amennyiben a beléptetés során a felhasználó háromszor rossz jelszót ad meg, a negyedik
alkalommal a név és jelszó mező mellett egy CAPTCHA kép feladványra is válaszolnia kell. A
belépett felhasználó egy központi főoldalra kerül, melynek menüjében a felhasználó csak azokat az
aloldalakat láthatja, melyekhez jogosultsággal rendelkezik. A menük stílusát rád bízzuk. A
menüben a kilépés lehetőségre kattintva a felhasználó ki tud jelentkezni a rendszerből.

Modell

A rendszerben lehessen felhasználókat, szerepköröket és számlákat tárolni. Az, hogy milyen
validációkat használsz az adott mezőkhöz azt te döntöd el, de mindenképpen legyen minimális
ellenőrzés!

Felhasználó
A felhasználókat reprezentáló entitás a következő mezőket kell, hogy tartalmazza:
 Név - kötelező
 Felhasználónév - kötelező
 Jelszó - kötelező
 Dátum (belépés dátuma) – nem kötelező
 Szerepkör - kötelező

Szerepkör
Minden felhasználó rendelkezik egy vagy több szerepkörrel. Amennyiben egy felhasználó több
szerepkörrel is rendelkezik, a jogosultságok unióját kell képezni, azaz a felhasználó megkapja
valamennyi hozzárendelt szerepkör jogosultságát. A szerepköröket a rendszerben az adminisztrátor
tudja állítani, változtatni.
Három szerepkör létezik:
 Adminisztrátor
o Látja az adminisztrációs oldalt, valamint az összes többi másik aloldalt is.
 Könyvelő
o Tud számlákat létrehozni, látja a számlák listáját is, külön a számlákat is meg tudja
tekinteni, de az adminisztrációs oldalt nem.
 Felhasználó
o Általános user, csak a számlák listáját látja, és a számlákat külön tudja megnyitni.

Az adatbázisban tárolni kell a következő adatokat a szerepkörökről:
 Név (a szerepkör általános neve) - kötelező
 Leírás (szerepkör leírása) – nem kötelező

Számla
A számla entitásnak a következő paramétereket kell, hogy tartalmazza:
 Vásárló neve – kötelező
 Kiállítás dátuma – kötelező
 Esedékesség dátuma- kötelező
 Tétel neve - kötelező
 Komment – kötelező
 Ár – kötelező

Funkcionális leírás
Belépési oldal
A belépési oldal elemei:
 Felhasználónév
 Jelszó
 Belépés gomb
 Regisztráció gomb
A belépési gomb csak akkor aktív, ha teljesülnek a form validációi. A felhasználó kitölti a
felhasználónév és jelszó mezőt, majd a belépés gombra kattint. Ha az adatok megegyeznek, a
felhasználó beléptetésre kerül, és a rendszer tovább irányítja a főoldalra. Amennyiben az adatok
nem stimmelnek, a felhasználót visszairányítjuk a belépési oldalra. 3 helytelen próbálkozás után
egy CAPTCHA képre is választ kell adnia.
Regisztrációs oldal
A regisztrációs oldal egy űrlapot tartalmaz, és a validációkat hasonlóan kell megadni, mint a
backend entitáson lévőket, egyetlen kikötésünk van, hogy nem lehet két hasonló felhasználó névvel
rendelkező felhasználó. Ha rossz adatokat adott meg, vagy nincs minden kitöltve a regisztrációs
gomb inaktív.
Elemei:
 Felhasználónév
 Jelszó
 Szerepkörök (adminisztrátoron kívül mindegyik választható, de csak egyet választhat)
 Regisztráció gomb
 Vissza gomb

Belépési kezdőoldal
Az oldal elemei:
 Menü
o Megjeleníti azoknak az aloldalaknak a linkjeit, amelyek megtekintéséhez a
felhasználónak joga van és a kilépés gombot.
o Belépési adatok, mint pl.: felhasználónév, szerepköreit és az utolsó belépés dátumát.

Adminisztrációs oldal
Csak az adminisztrátorok látják ezt a menüpont. Meg kell jeleníteni egy táblázatban az összes
felhasználó nevét. Egy külön oszlopban lévő gombbal lehessen őket törölni, valamint a
szerepköreiket állítani (multiselect).

Számlák listája oldal
Ezt az oldalt mindenki látja. Egy táblázatban kell megjeleníteni az összes adatát egy számlának.
Legyen egy „Create” button, amivel átnavigáljuk a felhasználót a számla készítő oldalra. Egy sorra
rákattintva a megjelenítő oldalra kerül a felhasználó.

Számla megtekintő oldal
Minden szerepkörrel rendelkező felhasználó látja. Egy űrlapot kell megjeleníteni, és kitölteni a
megfelelő értékekkel. A mezőket nem lehet változtatni, szerkeszteni! Legyen egy olyan gomb,
amivel vissza lehet navigálni.

Számla létrehozó oldal
Csak az adminisztrátorok és a könyvelők érhetik el. Egy űrlapot kell létrehozni a szükséges beviteli
mezőkkel. Legyen két gomb az oldalon, visszalépéshez és mentéshez. Az ellenőrzéséket
értelemszerűen válasszuk ki hozzájuk. Ha valamelyik nem megfelelő legyen róla visszajelzés!

Követelmények
 A CAPTCHA kép generálásához lehet harmadik fél által készített programot használni,
vagy webes szolgáltatást.
 Bármilyen adatbázist használhatsz, de mindenképpen legyenek mentve az adatok.
 Az adatbázisban legyen induláskor minden csoporthoz legalább egy felhasználó, a könnyű
tesztelés érdekében.
 Backend szolgáltatást Spring bootban írd meg, de adott esetben használhatsz más nyelvet
is.
 Frontend oldalhoz használhatsz olyan könyvtárat vagy keretrendszert, amit szeretnél. De ha
lehetséges, akkor az legyen React, Thymeleaf, vagy Angular.
