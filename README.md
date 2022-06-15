#### Variablen
```http
var viewportWidth;
```
Eine globale Variable, in der die aktuelle Bildschirmbreite gespeichert wird.
```http
var buildings = [];
```
Eine globale Variable, die sämtliche Gebäude und ihre Räume speichert, die beim ersten Aufruf der Seite vom Server geladen werden.
```http
var isLoadingSystemInfos = false;
```
Eine globale Variable, die aussagt, ob der Timer zum Aktualisieren der Systeminformationen im entsprechenden Dialog aktiv ist.
```http
var calendar = null;
```
Eine globale Variable, die eine Instanz der "FullCalendar"-Bibliothek speichert, welche zum Steuern des Kalenders genutzt wird.
```http
var isGettingReservations = false;
```
Eine globale Variable mit dem vordefinierten Wert false, die aussagen soll, ob zurzeit Reservierungsdaten für den Kalender vom Server geladen werden. Damit soll verhindert werden, dass gleichzeitig mehrmals Daten vom Server geladen werden.
```http
var firstRun = true;
```
Eine globale Variable mit dem vordefinierten Wert true, die aussagen soll, ob die Webseite zum ersten Mal aufgerufen wird.
```http
const dataTableTranslationStrings = { … };
```
Eine globale Variable, in denen Strings gespeichert sind, um numerischen Werten in Tabellen um verständlichen Text ersetzen.
```http
const moderatorDataTables = {};
```
Eine globale konstante Variable vom Typ Objekt ohne initialen Eigenschaften, welche eine Instanz der "DataTables"-Bibliothek speichert,  dessen Tabelle auf der Moderationsübersicht verwendet wird, um diese zu steuern.
```http
const adminDataTables = {};
```
Eine globale konstante Variable vom Typ Objekt ohne initialen Eigenschaften, welche Instanzen der "DataTables"-Bibliothek speichert, dessen Tabellen auf der Administrationsübersicht verwendet werden, um diese zu steuern.
```http
const dataTables = {};
```
Eine globale konstante Variable vom Typ Objekt ohne initialen Eigenschaften, welche eine Instanz der "DataTables"-Bibliothek speichert, dessen Tabelle auf der Kalenderübersicht im Tab "Eigene Reservierungen" verwendet wird, um diese zu steuern.
```http
const apiURL = "...";
```
Eine globale Variable, in der der Link zum Abrufen von Daten gespeichert ist.
```http
const dataTablesLocalisation = { … };
```
Eine globale konstante Variable vom Typ Objekt mit Eigenschaften, die zur Übersetzung die von der "DataTables"-Bibliothek erzeugten Tabellen verwendet werden, siehe https://datatables.net/manual/i18n.
```http
const dataTablesOptions = { … };
```
Eine globale konstante Variable vom Typ Objekt mit Eigenschaften zur Konfiguration der "DataTables"-Tabelle, die auf der Kalenderübersicht im Tab "Eigene Reservierungen" angezeigt wird.
```http
const dataTablesModeratorOptions = { … };
```
Eine globale konstante Variable vom Typ Objekt mit Eigenschaften zur Konfiguration der "DataTables"-Tabelle, die auf der Moderationsübersicht angezeigt wird.
```http
const dataTablesAdminOptions = { … };
```
Eine globale konstante Variable vom Typ Objekt mit Eigenschaften zur Konfiguration der "DataTables"-Tabellen, die auf der Administrationsübersicht angezeigt werden.

#### Funktionen
```http
function logout() { … };
```
Meldet den momentan angemeldeten Benutzer ab und wechselt dann zur Anmeldeseite.
```http
function getBuildings() { … };
```
Leert zuerst die Auswahlliste mit der ID buildingSelection mittels $("#buildingSelection").empty(). Anschließend werden sämtliche Gebäude und ihre Räume vom Server mittels einer http-Anfrage geladen und in die globale Variable buildings gespeichert. Dann wird die Auswahlliste mit den empfangenen Daten in einer for-Schleife mittels $("#buildingSelection").append(…) gefüllt. Damit die Auswahlliste für die zugehörigen Räume auch gefüllt wird, wird mittels $("#buildingSelection").change()  das "change"-Ereignis ausgelöst. Sollten keine Daten vorhanden sein, wird eine Warnmeldung angezeigt.
```http
function reloadDataTableData(element, table) { … };
```
Diese Funktion wird verwendet, um die Daten einer Tabelle neu zu laden. Das element wird deaktiviert und ein Ladesymbol darin eingefügt.
```http
function getCookie(cname) { … };
```
Gibt den Wert eines angegebenen Cookies zurück. Existiert kein entsprechendes Cookie, wird stattdessen eine leere Zeichenkette zurückgegeben.
```http
function readjustTables() { … };
```
Holt sich in einer Schleife die HTML-Elemente aller im Array stehenden Dropdown-Menüs auf der Administrationssicht und die Namen der Tabellen, die sich in den Dropdown-Menüs befinden. Dann wird überprüft, ob es DataTables-Instanzen dieser Tabellen gibt und die Dropdowns ausgeklappt sind. Letzteres wird durch den Wert des HTML-Attributs aria-expanded ermittelt. Wenn das Attribut auch true ist, werden die Layouts der jeweiligen Tabellen neu berechnet. Dies ist nötig, wenn sich die Fenstergröße ändert, während die Tabellen ausgeblendet waren, da diese sonst beim nächsten Anzeigen falsch dargestellt werden.
```http
function confirmRoomDeletion(lol) { … };
```
Zeigt eine Bestätigung zur Löschung eines Raumes an. Prüft zuerst, ob es eine DataTables-Instanz der Tabelle aller Räume (roomsAdminTable) auf der Administrationssicht gibt und holt sich dann ggf. alle Daten als Array daraus. Dann wird mittels eines Indexes geprüft, ob die Raum-ID in diesen Daten existiert und ggf. mittels eines Promise ein Bestätigungsdialog angezeigt. Wird die Löschung bestätigt, wird mittels $.post() eine HTTP-Anfrage mit dem Authentifizierungstoken, der Raum-ID und der Gebäude-ID, zu der die Raum-ID gehört, an den Server gesendet. War die Anfrage erfolgreich und sind keine Probleme beim Löschvorgang aufgetreten, wird die Tabelle neu geladen, ansonsten wird eine Fehlermeldung ausgegeben.
```http
function confirmation(options = {}, resolve) { … };
```
Erzeugt einen Bestätigungsdialog mit der im Argument options angegebenen Optionen. Das Argument resolve ist ein Callback, welches beim Klicken auf den Knopf „Ja“ ausgeführt wird, damit das Promise erfüllt wird, welches diese Funktion aufruft und somit eine Bestätigung stattfindet.
```http
function achso(callback, args = null) { … };
```
Diese Funktion wird verwendet, um Funktionen innerhalb von Objekten auszuführen.
```http
function formatDate(time, options) { ... };
```
Diese Funktion wird verwendet, um eine Ganzzahl in einem deutschen Format umzuwandeln. Es kann nur die Zeit, das Datum oder beides als Format angegeben werden.
```http
class Alert { … };
```
Eine Klasse, aus der eine Bootstrap-Meldung (Alert) erzeugt wird.
```http
static icons = { … };
```
Eine statische Eigenschaft vom Typ Objekt, in der die FontAwesome-CSS-Klassen gespeichert sind, um in einer Meldung ein passendes Symbol anzuzeigen.
```http
static types = […];
```
Eine statische Eigenschaft vom Typ Array, in welchem die möglichen Arten von Meldungen gespeichert sind (Information, Erfolg, Warnung, Fehler).
```http
static alerts = […];
```
Eine statische Eigenschaft vom Typ Array, in welchem alle momentan erzeugten Meldungen gespeichert sind.
```http
constructor(type, message, options = {}) { … };
```
Der Konstruktor, der bei der Erzeugung eines neuen Objekts immer automatisch aufgerufen wird. Das Argument type gibt die Art der Meldung an und message die anzuzeigende Nachricht innerhalb der Meldung. Das Argument options ist optional und kann folgende Optionen festlegen:
* id – eine benutzerdefinierte ID für die Meldung, statt eine automatisch erzeugte
* closeable – die Möglichkeit, die Meldung schließen zu können
* class – zusätzliche benutzerdefinierte CSS-Klassen für die Meldung als Zeichenkette
Sollte das Argument type nicht in der statischen Eigenschaft type vorhanden sein, wird diesem stattdessen der Wert „info“ zugewiesen. Handelt es sich beim Argument message um ein Array, wird der Variable text eine unsortierte HTML-Liste zugewiesen, die jedes Element des Arrays als Listenelement auflistet, ansonsten direkt den Wert von message. Ist keine benutzerdefinierte ID angegeben, wird der Variable id mittels des aktuellen Datums und einer zufälligen Zahl automatisch eine erzeugt. Sollte es bereits eine gleiche generierte ID geben (auch wenn es unwahrscheinlich wäre), wird in einer Schleife solange eine neue ID erzeugt, bis eine ungenutzte ermittelt wurde. Wenn eine benutzerdefinierte ID verwendet wird, wird geprüft, ob diese bereits einem beliebigen HTML-Element zugeordnet wurde und gibt ggf. eine Fehlermeldung aus. Dann wird die Variable element deklariert, die der HTML-Code der Meldung zugewiesen werden soll. Der Variable closeable wird entweder der Wert true oder false zugewiesen, je nachdem, welcher Wert übergeben wurde, um festzulegen, ob die anzuzeigende Meldung geschlossen werden kann. Der Variable classes werden, wenn angegeben und gültige Werte übergeben wurden, zusätzliche CSS-Klassen als Zeichenkette zugewiesen. Der Variable element wird dann die mittels angegebener Optionen dynamisch erzeugten Bootstrap-Meldung zugewiesen. Die ID der Meldung wird dann zur statischen Klassenvariable alerts hinzugefügt. Der nun erzeugten Instanz werden die übergebenen Argumente zugewiesen, um auf sie zugreifen zu können. Zusätzlich erhält sie noch ein Ereignis, welches die ID der Meldung aus der statischen Klassenvariable alerts entfernt, wenn die Meldung geschlossen wurde.
```http
destroy() { };
```
Diese Funktion zerstört eine erzeugte Meldung. Zuerst wird die ID der jeweiligen Meldung aus der Klassenvariable alerts entfernt, damit sie wieder verfügbar wird und dann die Meldung geschlossen, bzw. entfernt, unabhängig davon, ob sie mit der Option closeable mit dem Wert true oder false erzeugt wurde.
```http
static create(type, message, options = {}) { … };
```
Eine statische Version der Funktion create, welche im Grunde das gleiche tut, wie ihr Gegenstück. Der Unterschied ist, dass kein Objekt zurückgegeben wird, sondern eine Zeichenkette, die als HTML interpretiert werden kann. Dadurch ist es nicht möglich, auf die zur Erzeugung übergebenen Argumente zuzugreifen, außer auf die ID mittels DOM.
```http
static destroy(id) { … };
```
Eine statische Version der Funktion destroy, welche im Grunde das gleiche tut, wie ihr Gegenstück. Der Unterschied ist, dass die ID der zu entfernenden Meldung angegeben werden muss. Da die Funktion nicht auf ein einzelnes Objekt vererbt wird, können mit ihr auch dynamisch erzeugte Meldungen anhand ihrer ID entfernt werden.
```http
class Modal { … };
```
Eine Klasse, mit der ein Bootstrap-Dialog (Modal) mit definiertem Inhalt angezeigt wird. Dabei wird immer nur ein einzelner Hauptdialog angepasst (und kein neuer erzeugt).
```http
static create(data = {}) { … };
```
Eine statische Funktion, mit der der Hauptdialog angezeigt wird. Das Argument data ist erforderlich, muss vom Typ Objekt sein und enthält Optionen, bzw. Eigenschaften, von denen folgende zur Verfügung stehen:
* size – (Optional) Legt die Größe des Dialogs fest. Gültige Werte sind “sm”, ”default”, ”lg”, ”xl”, ”fullscreen”. Standardmäßig wird default verwendet.
* static – (Optional) Legt fest, ob der Dialog nicht ausgeblendet wird, wenn man außerhalb diesem klickt oder die ESC-Taste drückt. Standardmäßig wird false verwendet.
* name – Legt den Namen des Dialogs fest.
* events – (Optional) Legt Ereignisse fest, bei denen benutzerdefinierte Aktionen ausgeführt werden können. Die möglichen Ereignisse sind jedoch nur auf die des Bootstrap modal beschränkt und müssen vom Typ Objekt sein und muss mindestens die Eigenschaft function besitzen. Als Wert kann entweder der Name einer Funktion als Zeichenkette ohne () als Wert und optional die Eigenschaft args mit Argumenten als Array angegeben werden oder eine echte Funktion, bei der die Eigenschaft args dann ignoriert wird. Um mehrere Ereignisse hinzuzufügen, müssen ihre Objekte durch Kommas getrennt werden.
* title – Legt den Titel des Dialogs fest, der oben angezeigt wird.
* content – Legt Optionen für den Inhalt des Dialogs fest:
* *	text – Legt den anzuzeigenden Text für den Inhalt des Dialogs fest.
* * options – (Optional) Legt zusätzliche Optionen für den Dialoginhalt fest:
* * scroll – (Optional) Legt fest, ob bei zu viel Inhalt dieser scrollbar wird. Standardmäßig wird false verwendet.
* * align – (Optional) Legt fest, wie der Inhalt ausgerichtet wird. Gültige Werte sind left, center, right. Standardmäßig wird left verwendet.
* * footer – (Optional) Legt Optionen für den Footer fest:
* * buttons – (Optional) Legt benutzerdefinierte Schaltflächen fest:
* * default – (Optional) Legt Optionen für die Standardschaltfläche fest, die den Dialog schließt:
* * text – Legt den Text fest, der in der Schließschaltfläche angezeigt wird.
* * class – (Optional) Legt zusätzliche CSS-Klassen als Zeichenkette für die Schließschaltfläche fest.
* * display – (Optional) Legt fest, ob die Schließschaltfläche angezeigt wird. Standardmäßig wird true verwendet.
* * attributes – (Optional) Legt zusätzliche HTML-Attribute für die Schließschaltfläche fest. Diese müssen in einem Objekt stehen, in der die Eigenschaften den Attributsnamen und als Wert den gewünschten Wert besitzen.
* * custom – (Optional) Legt benutzerdefinierte Schaltflächen im Footer fest, die vom Typ Objekt in einem Array stehen müssen:
* * text – Legt den Text fest, der in der Schaltfläche angezeigt wird.
* * class – (Optional) Legt zusätzliche CSS-Klassen als Zeichenkette für die Schaltfläche fest.
* * attributes – (Optional) Legt zusätzliche HTML-Attribute für die Schaltfläche fest. Diese müssen in einem Objekt stehen, in der die Eigenschaften den Attributsnamen und als Wert den gewünschten Wert besitzen.
* * actions – Legt Aktionen für die Schaltfläche fest, die in einem Objekt mit dem Namen der Aktion stehen und mindestens die Eigenschaft function besitzen muss. Als Wert kann entweder der Name einer Funktion als Zeichenkette ohne () als Wert und optional die Eigenschaft args mit Argumenten als Array angegeben werden oder eine echte Funktion, bei der die Eigenschaft args dann ignoriert wird. Um mehrere Aktionen festzulegen, müssen diese mit Kommas getrennt werden.
```http
function checkHours(element) { … };
```
Diese Funktion wird verwendet, um den Stundenanteil einer Uhrzeit im Dialog zur Erstellung einer Reservierung auf Gültigkeit zu prüfen. Zuerst wird der Stundenwert in eine Ganzzahl konvertiert und dann geprüft, ob es sich um eine gültige Ganzzahl handelt. Wenn dies zutrifft, wird dem Eingabefeld für die Stunde der Wert 00 zugewiesen, wenn sie außerhalb des erlaubten Bereichs ist. Wenn der Wert keine gültige Ganzzahl ist nicht, wird dem Eingabefeld ebenfalls der Wert 00 zugewiesen.
```http
function checkMinutes(element) { … };
```
Diese Funktion wird verwendet, um den Minutenanteil einer Uhrzeit im Dialog zur Erstellung einer Reservierung auf Gültigkeit zu prüfen. Zuerst wird der Minutenwert in eine Ganzzahl konvertiert und dann geprüft, ob es sich um eine gültige Ganzzahl handelt. Wenn dies zutrifft, wird dem Eingabefeld für die Stunde der Wert 00 zugewiesen, wenn sie außerhalb des erlaubten Bereichs ist. Wenn der Wert keine gültige Ganzzahl ist nicht, wird dem Eingabefeld ebenfalls der Wert 00 zugewiesen.
```http
function showRoomCreationModal(lol = null) { … };
```
Diese Funktion wird verwendet, um einen Dialog zur Erstellung eines Raumes anzuzeigen, wobei die Variable lol optional das dazugehörige Gebäude ist. In der Variable content wird der Dialoginhalt gespeichert. In der dazwischenliegenden Schleife werden, falls vorhanden, zur Auswahlliste des Gebäudes ebendiese hinzugefügt. Wenn lol nicht den Wert null hat und dessen numerischer Wert der ID der momentanen Iteration des Gebäudes entspricht, wird dieser in der Auswahlliste als ausgewählt markiert. In der Variable data werden die Optionen für den Dialog angegeben. Darin befindet sich das shown-Ereignis, welches beim Absenden des Formulars die unktion saveNewRoom ausführt und dann den Wert false zurückgibt, um die Standardaktion beim Absenden des Formulars zu verhindern. Im hide-Ereignis wird dem Formular das submit-Ereignis entfernt.
```http
function disableMainModal(mainButton) { … };
```
Diese Funktion deaktiviert den Hauptdialog, damit beim Verarbeiten von Daten die Daten nicht verändert werden können. In einer Hauptschaltfläche wird ein Ladesymbol eingefügt und diese deaktiviert.
```http
function enableMainModal(mainButton) { … };
```
Diese Funktion aktiviert den Hauptdialog, wenn die Verarbeitung von Daten abgeschlossen ist. Das Ladesymbol wird aus der Hauptschaltfläche entfernt und diese aktiviert.
```http
function showRoomEditingModal(lol) { … };
```
Diese Funktion zeigt einen Dialog zur Bearbeitung eines Raumes an. Wenn das Speichern der Daten erfolgreich war, wird der Dialog ausgeblendet, ansonsten eine Fehlermeldung in im angezeigt.
```http
function showBuildingCreationModal() { … };
```
Diese Funktion zeigt einen Dialog zur Erstellung eines Raumes an. Wenn das Speichern der Daten erfolgreich war, wird der Dialog ausgeblendet, ansonsten eine Fehlermeldung in im angezeigt.
```http
function showBuildingEditingModal(lol) { … };
```
Diese Funktion zeigt einen Dialog zur Bearbeitung eines Gebäudes an. Wenn das Speichern der Daten erfolgreich war, wird der Dialog ausgeblendet, ansonsten eine Fehlermeldung in im angezeigt.
```http
function showAdminReservationEditingModal(id) { ... };
```
Diese Funktion zeigt einen Dialog zur Bearbeitung einer Reservierung für Administratoren an.
```http
function saveAdminEditedReservation(id) { ... };
```
Diese Funktion wird zum Speichern einer bearbeiteten Reservierung durch Administratoren verwendet. Die Daten werden an den Server gesendet und dsnn eine Meldung angezeigt, ob das Speichern erfolgreich war oder nicht.
```http
function saveEditedBuilding(id) { … };
```
Diese Funktion wird zum Speichern der Daten eines bearbeiteten Gebäudes verwendet. Die Daten werden an den Server gesendet und dann eine Meldung angezeigt, ob das Speichern erfolgreich war oder nicht.
```http
function confirmBuildingDeletion(lol) { … };
```
Diese Funktion zeigt einen Bestätigungsdialog zur Löschung eines Gebäudes an. Bei Bestätigung wird eine Anfrage an den Server gesendet und eine Meldung angezeigt ob das Löschen erfolgreich war oder nicht.
```http
function confirmReservationApproval(lol) { … };
```
Diese Funktionen zeigt einen Dialog zur Genehmigung einer Reservierung an. Bei Bestätigung wird eine Anfrage an den Server gesendet und eine Meldung angezeigt ob das Genehmigen erfolgreich war oder nicht.
```http
function confirmReservationRejection(lol) { … };
```
Diese Funktionen zeigt einen Dialog zur Ablehnung einer Reservierung an. Bei Bestätigung wird eine Anfrage an den Server gesendet und eine Meldung angezeigt ob das Ablehnen erfolgreich war oder nicht.
```http
function saveNewBuilding() { … };
```
Diese Funktion wird zum Speichern der Daten eines neuen Gebäudes verwendet. Die Daten werden an den Server gesendet und dann eine Meldung angezeigt, ob das Speichern erfolgreich war oder nicht.
```http
function saveNewReservation(startDate, endDieseDate) { … };
```
Diese Funktion wird zum Speichern der Daten einer neuen Reservierung verwendet. Die Daten werden an den Server gesendet und dann eine Meldung angezeigt, ob das Speichern erfolgreich war oder nicht.
```http
function getReservations(start, end, successCallback, failureCallback) { … };
```
Diese Funktion wird verwendet, um die Reservierungsdaten für den Kalender für den ausgewählten Monat vom Server zu laden. Wenn die Anfrage nicht erfolgreich war, wird eine Meldung angezeigt.
```http
function loadRooms(source, target) { … };
```
Diese Funktion wird verwendet, um in ein HTML-Element alle Räume einzufügen.
```http
function loadBuildings(target) { … };
```
Diese Funktion wird verwendet, um in ein HTML-Element alle Gebäude einzufügen.
```http
function showReservationCreationModal() { … };
```
Diese Funktion zeigt den Dialog zur Erstellung einer neuen Reservierung an. In den Variablen startDate und endDate werden jeweils die in der Schaltfläche zum Öffnen des Dialogs gespeicherten Start- und Enddaten des ausgewählten Reservierungszeitraum gespeichert. Wenn beide Variablen gültige Werte besitzen, wird in der Variable startDateArray der Tag, Monat und das Jahr des Startdatums gespeichert. Der Variable content wird dann der Dialoginhalt zugewiesen. Mittels der dazwischenliegenden Schleife werden alle Gebäude zur dazugehörigen Auswahlliste hinzugefügt. In der Variable data werden die Optionen für den Dialog festgelegt. Im darin befindlichen Ereignis shown wird auf das HTML-Element zur Gebäudeauswahl das change-Ereignis ausgelöst, damit die dazugehörige Funktion ausgeführt wird. Wenn das Formular abgesendet wird, wird die Funktion saveNewReservation mit den Variablen startDate und endDate ausgeführt. Damit die Standardaktion beim Absenden des Formulars nicht ausgeführt wird, wird zum Schluss der Wert false zurückgegeben. Im hide-Ereignis wir dem Formular das submit-Ereignis entfernt. Im Footer des Dialogs wird eine benutzerdefinierte Schaltfläche erzeugt, die beim Klick das click-Ereignis auf die nicht sichtbare Schaltfläche zum Absenden des Formulars ausgelöst.
```http
Number.prototype.duration = function() { … };
```
Erweitert den Prototyp von Number-Klassen (also den Datentyp Integer) um die Funktion duration. Dadurch erhalten alle Number-Objekte automatisch diese Funktion, welche die Dauer eines Integers in Wochen, Tagen, Stunden, Minuten und Sekunden darstellt. Diese Funktion nimmt daher an, dass der Wert des jeweiligen Number-Objekts eine Zeit in Sekunden repräsentiert. Wenn Zeiteinheiten den Wert 0 haben, werden diese nicht angezeigt.
```http
$(window).on("load", function() { … }).on("resize", function() { … });
```
Diese Funktion wird ausgeführt, sobald sämtliche Inhalte auf der Webseite geladen und verarbeitet wurden. Dadurch wird dann das Ladesymbol entfernt.
```http
$(document).on("DOMContentLoaded", function() { … });
```
Diese Funktion wird ausgeführt, sobald das DOM (und nicht alle Inhalte) vollständig geladen wurde. In der Variable calendar wird eine erzeugte FullCalendar-Instanz mit den angegebenen Optionen gespeichert. Die Bedingung im return in der Funktion der Eigenschaft selectAllow schränkt die Auswahl des Mindeststartdatums auf das aktuelle Datum ein. Die Funktion in der Eigenschaft events gibt ein leeres Objekt zurück, wenn die Seite zum ersten Mal aufgerufen wird, um das Laden ebendieser Seite zu beschleunigen. 
```http
$("footer").html("<a href='#about'>&copy; 2021-" + date.getFullYear() + " BSDGG/IN20/FIAE</a>");
```
Fügt in das a-HTML-Element am Seitenende den Copyright-Vermerk mit Projekterstellungsjahr und aktuellem Jahr ein. Dazu wird ein Date-Objekt erzeugt und der Variable date zugewiesen.
```http
$("#calendarLocationForm").submit(function() { … });
```
Diese Funktion wird beim Absenden des Formulars zum Laden der Reservierungen des ausgewählten Gebäudes und Raums ausgeführt, um den Kalender zu füllen.
```http
$("a[href='#systemInfos']").click(function() { … });
```
Diese Funktion zeigt einen Dialog zur Anzeige der Systeminformationen an.
```http
$("a[href='#logout']").click(function() { … });
```
Diese Funktion wird verwendet, um den momentan angemeldeten Benutzer abzumelden.
```http
$("a[href='#reservationsOverview']").on("shown.bs.tab", function() { … });
```
Diese Funktion wird ausgeführt, wenn die Reservierungsseite aktiviert wurde. Sofern der Wert der Variable calendar nicht null und die Kalenderseite aktiv ist, wird mit ihr die Größe des Kalenders aktualisiert. Dies ist nötig, wenn sich die Fenstergröße geändert hat, während die Reservierungsseite nicht aktiv war, da der Kalender sonst falsch dargestellt wird. Wenn keine Gebäude gefunden wurden, wird eine Warnung angezeigt.
```http
$("a[href='#calendar']").on("shown.bs.tab", function() { … });
```
Diese Funktion wird ausgeführt, wenn die Kalenderseite aktiviert wurde. Sofern der Wert der Variable calendar nicht null ist, wird mit ihr die Größe des Kalenders aktualisiert. Dies ist nötig, wenn sich die Fenstergröße geändert hat, während die Kalenderseite nicht aktiv war, da der Kalender sonst falsch dargestellt wird.
```http
$("a[href='#myReservations']").on("shown.bs.tab", function() { … });
```
Diese Funktion wird ausgeführt, wenn die eigene Reservierungsseite aktiviert wurde. Wenn die dort befindliche Tabelle noch keine DataTable-Instanz ist, wird der Wert für die Auswahlliste für den Status auf 0 gesetzt und die erwähnte Instanz mit den vordefinierten Optionen erzeugt. Zusätzlich wird der Variable options noch die Option zur Verwendung von Zeilengruppierung zugewiesen.
```http
$("a[href='#moderation']").on("shown.bs.tab", function() { … });
```
Diese Funktion wird ausgeführt, wenn die Moderationsseite aktiviert wurde. Wenn keine Gebäude in der Variable buildings gespeichert sind, wird eine Warnmeldung angezeigt, ansonsten diese ggf. entfernt. Wenn die dort befindliche Tabelle noch keine DataTable-Instanz ist, wird die Auswahlliste für Gebäude geladen und die erwähnte Instanz mit den vordefinierten Optionen erzeugt. Zusätzlich wird der Variable options noch die Option zur Verwendung von Zeilengruppierung zugewiesen.
```http
$("a[href='#administration']").on("shown.bs.tab", function() { … });
```
Diese Funktion wird ausgeführt, wenn die Administrationsseite aktiviert wurde. Wenn die Bildschirmbreite anders ist, als in der Variable viewPortWidth, wird die Funktion readjustTables ausgeführt.
```http
$("#buildings-accordion").on("shown.bs.collapse", function() { … });
```
Diese Funktion wird ausgeführt, wenn das Dropdown-Element für die Gebäude geöffnet wurde. Wenn die dort befindliche Tabelle noch keine DataTables-Instanz ist, wird sie für diese erstellt. Im draw-Ereignis wird, wenn sie noch nicht existiert, eine Schaltfläche zum Anzeigen des Dialogs zum Erstellen eines Gebäudes unter die Tabelle eingefügt. 
```http
$("#rooms-accordion").on("shown.bs.collapse", function() { … });
```
Diese Funktion wird ausgeführt, wenn das Dropdown-Element für die Räume geöffnet wurde. Wenn die dort befindliche Tabelle noch keine DataTable-Instanz ist, wird die Auswahlliste für Räume geladen und die erwähnte Instanz mit den vordefinierten Optionen erzeugt. Zusätzlich wird der Variable options noch die Option zur Verwendung von Zeilengruppierung zugewiesen. Im draw-Ereignis wird, wenn die Zeilengruppierung nicht aktiviert ist, und wenn sie noch nicht existiert, die Schaltfläche zum Anzeigen des Dialogs zum Erstellen eines Raumes unter der Tabelle eingefügt, ansonsten entfernt. 
```http
$("#roomsBuildingSelect").change(function() { … });
```
Diese Funktion wird ausgeführt, wenn ein Element im Dropdown-Element auf der Administrationsseite unter der Raumverwaltung ausgewählt wird. Wenn alle Gebäude in der Tabelle angezeigt werden sollen, wird eine Zeilengruppierung der Gebäude angezeigt, ansonsten nur die Räume des ausgewählten Gebäudes.
```http
$("#reservationBuildingSelect").change(function() { … });
```
Diese Funktion wird ausgeführt, wenn ein Element im Dropdown-Element auf der Administrationsseite unter der Reservierungsverwaltung ausgewählt wird. Wenn alle Gebäude in der Tabelle angezeigt werden sollen, wird eine Zeilengruppierung der Gebäude angezeigt, ansonsten nur die Räume des ausgewählten Gebäudes.
```http
$("#moderationBuildingSelect").change(function() { … });
```
Diese Funktion wird ausgeführt, wenn ein Element im Dropdown-Element auf der Moderationsseite unter der Reservierungsverwaltung ausgewählt wird. Wenn alle Gebäude in der Tabelle angezeigt werden sollen, wird eine Zeilengruppierung der Gebäude angezeigt, ansonsten nur die Räume des ausgewählten Gebäudes.
```http
$("#myReservationStatusSelect").change(function() { … });
```
Diese Funktion wird ausgeführt, wenn ein Element im Dropdown-Element auf der Hauptseite unter der eigenen Reservierungsübersicht ausgewählt wird. Wenn alle Status in der Tabelle angezeigt werden sollen, wird eine Zeilengruppierung der Status angezeigt, ansonsten nur die Räume des ausgewählten Status.
```http
$("#reservation-accordion").on("shown.bs.collapse", function() { ... };
```
Diese Funktion wird ausgeführt, wenn das Dropdown-Element für die Reservierungen auf der Administrationsseite geöffnet wurde. Wenn die dort befindliche Tabelle noch keine DataTables-Instanz ist, wird sie für diese erstellt.