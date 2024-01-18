<!-- _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md) -->

![uncinc-white](https://github.com/itsValyria/the-startup-responsive-interactieve-website/assets/76444716/8d909d44-d386-40f0-a53c-9ffcb3e2b0a2)

# Unc Inc | Our Impact
Dit project is een webpagina wat onderdeel is van de website van [Unc Inc](https://www.uncinc.nl/nl).

Op deze pagina staat beschreven wat de impact is van Unc Inc en hoe zij dit voor elkaar krijgen.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Dit project is gemaakt volgens de huisstijl van Unc Inc. 

Op deze webpagina kun je meer informatie lezen over Unc Inc en hun impact. Ze vertellen onder andere over hun werk, hun mensen en hun b-corp certificering. 

De website is bedoeld voor bestaande en toekomstige klanten, maar ook toekomstig personeel. In de regel zijn dit volwassen, redelijk hoog opgeleide mensen.

Meer weten? Check de webpagina [hier](https://itsvalyria.github.io/the-startup-responsive-interactieve-website/)!

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

### HTML
In de HTML heb ik geprobeerd een zo duidelijk mogelijke structuur te maken. Zo maak ik gebruik van 2 space indents, en zorg ik dat er witruimte zit tussen grote elementen.

### CSS
In de CSS heb ik gebruik gemaakt van vijf media queries die mee zijn gegeven door de opdrachtgever.

```css
/* XS */

@media screen and (max-width: 575px) {

}

/* S */

@media screen and (min-width: 576px) and (max-width: 767px) {
  
}

/* M */

@media screen and (min-width: 768px) and (max-width: 1199px) {
  
}

/* L */

@media screen and (min-width: 1200px) and (max-width: 1559px) {
  
}

/* XL */

@media screen and (min-width: 1560px) {
  
}
```

Ook heb ik gebruik gemaakt van custom properties, zodat ik de huisstijl makkelijk en op een goede manier in stand kan houden.

```css
:root {
  --base--black: #202020;
  --base--grey-19: #4A4A4A;
  --base--grey-62: #AAAAAA;
  --base--grey-97: #F8F8F8;
  --base--white: #ffffff;

  --primary--yellow-accent: #E0B31E;
  --primary--orange-accent: #E09B44;
  --primary--blue-accent: #74C9C3;
  --primary--green-accent: #7ABA4A;
  
  --primary--yellow-background: #FCF7E8;
  --primary--orange-background: #FCF5EC;
  --primary--blue-background: #F1FAF9;
  --primary--green-background: #F2F8ED;
}
```

### JavaScript

Ik heb JavaScript gebruikt voor de carrousel op mobiel, en ook voor de nummer animation count.

Er is geen gebruik gemaakt van plug-ins of frameworks, wat betekent dat je direct met deze code aan de slag kan.

### Nummer animatie (optellen)

In de HTML staan de headers, waar de optel animatie in plaatsvindt. In dit geval zoekt de JavaScript code naar de ```akhi``` attribuut. 

```html
 <h2 class="main__scores--blue value" akhi="101" id="corpScore">0</h2>
 <h2 class="main__scores--blue value" akhi="8" id="custSatisfaction">0</h2>
 <h2 class="main__scores--blue  value" akhi="95" id="purpDrivenClients">0</h2>
```

Hier in de roept de function de waarde van de ```akhi``` attribuut aan en daardoor tellen de nummers op tot dat exacte nummer.

```js
function countingAnimation(elementId) {
  const counter = document.getElementById(elementId);

  const animate = () => {
      const value = + counter.getAttribute("akhi");
      const data = + counter.innerText;
    if(data < value) {
      counter.innerText++;
      setTimeout(animate, 20);
    }else{
      counter.innerText = value;
    }
  }
  
  animate();
}
```

### Carrousel

Onderstaand de JavaScript code van de carrousel. Elke carrousel heeft zijn eigen ID. Door gebruik te maken van een display active en block, zul je telkens maar een van de items van de carrousel zien.

```js
const slideIndexes = {
  'work': 1,
  'people': 1,
  'company': 1,
  'planet': 1,
};
for (const slide of Object.keys(slideIndexes)) {
  showSlides(slide);
}

function incrementSlide(id, n) {
  slideIndexes[id] += n;
  showSlides(id);
}

function currentSlide(id, n) {
  slideIndexes[id] = n;
  showSlides(id);
}

function showSlides(id) {
  const className = `.carrousel--${id}`;
  const slides = document.querySelectorAll(`${className} .mySlides`);
  const dots = document.querySelectorAll(`${className} .dot`);
  if (slideIndexes[id] > slides.length) {
    slideIndexes[id] = 1;
  }
  if (slideIndexes[id] < 1) {
    slideIndexes[id] = slides.length;
  }

  const slideIndex = slideIndexes[id];
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}
```

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

