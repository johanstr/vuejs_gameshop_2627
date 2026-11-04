# Workshops voor de specialisatie Frontend Development
Ter introductie van JavaScript Frameworks voor het bouwen van een voorbeeld SPA (Single Page Application) maken we gebruik van VueJS.
Andere frameworks die in het werkveld veel gebruikt worden zijn:  
  
* ReactJS  
  De meest gebruikte in de regio.
* Angular  
  Veelal gebruikt door grote organisatie en voor grote applicaties.  
  Echter een redelijk steile leercurve.
* Svelte  
  Een alternatief voor VueJS en ReactJS. Niet veel gebruikt in de regio.
  
# Installatie van VueJS
  
## Voorbereiding
Je moet eerst een aantal programma's installeren alvorens je gebruik kunt maken van een JavaScript Framework zoals hierboven vermeld.  
  
### NodeJS
NodeJS is nodig voor o.a. de package manager, extra voorzieningen in de taal JavaScript, want NodeJS heeft de taal enorm uitgebreid.
NodeJS vind je hier: [NodeJS Website](https://nodejs.org/en)

### Browser Extensions
In je browser installeer je sowieso de volgende extensie:  
#### VueJS Devtools
Deze vind je via de browser extension website of via [Devtools Website](https://devtools.vuejs.org/guide/browser-extension)  
  
### VueJS Commandline Tool
De VueJS Command Line maakt het een stuk makkelijker om een project te starten. Je krijgt daarbij alvast boilerplate code om te bestuderen. Deze tool maakt het ook mogelijk om te selecteren welke uitbreidingen (packages) je in je project wil installeren.  
  
Je vind de tool via de volgende link: [VueJS CLI](https://cli.vuejs.org/).  
  
### Terminal omgeving
#### Linux & MacOS
Je hebt standaard al de beschikking over een uitermate geschikte terminal omgeving (Bash).  
  
#### Windows
Via de Microsoft App Store kun je, als dit nog niet gebeurd is, Windows Terminal installeren. Standaard zal deze opstarten met PowerShell, maar in principe is CMD meer dan voldoende.  
  
# Starten met een nieuw project
Je kunt een nieuw starten door het volgende in de terminal in te tikken (let op! Vervang **[projectfolder naam]** door een logische en beschrijvende naam die je zelf bedenkt):  
  
```bash
vue create [projectfolder naam]
```  
  
Volg de stappen die Vue CLI je aanbied.  
Slim is voor elk project sowieso de uitbreiding ***router*** te selecteren in de stappen.  
  
# De voorbeeld code installeren op je computer
Je kiest eerst de map waar je de code van deze repo wilt installeren.  
  
## STAP 1 - Binnenhalen van de code van deze repo
In de terminal tik je de volgende opdracht (let op! Als je de map die aangemaakt wordt zo een andere naam wilt geven vervang je **[eigen naam aan de map]** door een logische en beschrijvende zelf gekozen mapnaam. Als je dat niet doet krijgt de map automatisch de naam van de repo):  
  
```bash
git clone https://github.com/johanstr/vuejs_gameshop_2627 [eigen naam aan de map]
```  

## STAP 2 - Project setup
Vervang in onderstaande opdracht **[naam van de projectmap]** door de naam van map die je zojuist hebt aangemaakt.
```bash
cd [naam van de projectmap]
npm install
```
  
# Hoe start je met programmeren?
Je wil, zonder gebruik te maken van b.v. XAMPP of WAMP, kunnen programmeren en je app in de browser zien. Dat kun je voor elkaar krijgen door de volgende opdracht in de terminal in te tikken:  

## Compiles and hot-reloads for development
```bash
npm run serve
```
  
# Je app is af en je wil de app productie klaar maken
Wanneer je app klaar is en je wil deze op een server beschikbaar maken moet je eerst de productie versie laten bouwen (de dist versie). Dit doe je met de volgende terminal opdracht:  

###Compiles and minifies for production
```bash
npm run build
```

# Codebestanden checken en eventueel repareren
  
## Lints and fixes files
```bash
npm run lint
```
  
# Extra links
  
## Customize configuration
See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).
