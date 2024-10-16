import { Injectable } from '@angular/core';
import { Car } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsComp: Car[] = [
    {
      idComp: 1,
      brandComp: 'Citroën',
      modelComp: 'BX 1982',
      descriptionComp: 'La Citroën BX est une automobile produite par le constructeur français Citroën à 2 337 016 exemplaires [archive] entre 1982 et 1994 (2 135 332 berlines et 186 827 breaks, soit 8%). Insérée dans la gamme entre la Citroën GSA et la CX, la BX est dévoilée aux pieds de la tour Eiffel et lancée au Salon de l\'Automobile de Paris en octobre 1982.',
      imageComp: 'BX.webp'
    },
    {
      idComp: 2,
      brandComp: 'Citroën',
      modelComp: 'Xantia',
      descriptionComp: 'La Citroën Xantia est une automobile de gamme moyenne, fabriquée à Rennes à 1 528 800 exemplaires entre mars 1993 et 2001 et remplaçante de la Citroën BX. Elle est équipée comme sa devancière de la suspension hydropneumatique. Elle offre sur les finitions haut de gamme la suspension « Hydractive » de la XM, dans sa version « Hydractive II ». Par ailleurs, la série Activa ajoute à l\'« Hydractive II » le SC/CAR (système Citroën de contrôle actif de roulis) qui tend à supprimer le roulis. La Xantia est dotée d\'un train arrière autodirectionnel dérivé de la ZX.',
      imageComp: 'Xantia.jpg'
    },
    {
      idComp: 3,
      brandComp: 'Renault',
      modelComp: 'Clio II',
      descriptionComp: 'La Renault Clio II est une citadine produite par le constructeur automobile français Renault de mars 1998 à 2012, et jusqu\'à 2016 pour la Clio Mio. Il s\'agit de la deuxième génération de Clio, elle connait un grand succès sur le marché français en étant la voiture la plus vendue en 1998, 1999, 2000, 2002 et 2003, disputant la première place à sa principale rivale qu\'est la Peugeot 206.',
      imageComp: 'clio2.jpg'
    },
    {
      idComp: 4,
      brandComp: 'Renault',
      modelComp: 'Supercinq',
      descriptionComp: 'La Renault 5 de deuxième génération, plus communément appelée Renault Supercinq, référencée "Super 5" par l\'UTAC-OTC2., est une automobile 5 places produite par Renault de 1984 à 1996, qui a remplacé la Renault 5 de première génération. Elle est la voiture la plus vendue en France de 1986 à 1989 devant sa principale rivale la Peugeot 205. Supplée en juin 1990 par la Renault Clio, elle est produite jusqu\'en décembre 1996.',
      imageComp: 'R5.jpg'
    },
    {
      idComp: 5,
      brandComp: 'Seat',
      modelComp: 'Córdoba',
      descriptionComp: 'La première génération de la Córdoba fut présentée au salon de Francfort de 1993 et lancé durant l\'été de la même année. Le responsable du design était l\'italien Giorgetto Giugiaro sur la base du châssis de la SEAT Ibiza II. 3 carrosseries sont disponibles sur cette première génération : berline 4 portes (Córdoba), break 5 portes (Córdoba Vario) et coupé 2 portes (Córdoba SX).',
      imageComp: 'seat-cordoba.webp'
    },
    {
      idComp: 6,
      brandComp: 'Peugeot',
      modelComp: '205',
      descriptionComp: 'La Peugeot 205 est un modèle automobile du segment B produit par le constructeur français Peugeot. Elle est l\'un des modèles phares du constructeur, qui le sauve d\'une situation financière délicate après l\'achat de Chrysler Europe. Elle est fabriquée de 1983 à 1998 à 5 278 300 exemplaires, ce qui fait d\'elle la Peugeot la plus produite jusqu\'à ce que la 206 la dépasse. Elle est la voiture la plus vendue en France en 1984 et 1985, succédant à la Renault 5, et de nouveau en 19903, disputant la première place à sa principale rivale, la Renault Supercinq.',
      imageComp: 'Peugeot_205.jpg'
    },
    {
      idComp: 7,
      brandComp: 'Peugeot',
      modelComp: '206',
      descriptionComp: 'La Peugeot 206 est une citadine polyvalente produite par le constructeur automobile français Peugeot de septembre 1998 à 2006. Elle succède à la Peugeot 205 dont la production a cessé en 1998 en France et en 1999 en Espagne. La 206 est la voiture la plus vendue en France en 2001, 2004 et 2005, disputant la première place à sa principale concurrente la Renault Clio II. Depuis les années 2010, elle est la voiture française la plus produite et la plus vendue de l\'histoire.',
      imageComp: '206.jpg'
    },
    {
      idComp: 8,
      brandComp: 'Wolkswagen',
      modelComp: 'Polo III',
      descriptionComp: 'La Volkswagen Polo est une automobile, de la gamme des polyvalentes, de la marque allemande Volkswagen depuis 1995. Elle est vendue en Europe et sur d\'autres marchés du monde en variantes à hayon, berline et break tout au long de sa production.',
      imageComp: 'Polo.jpg'
    },
    {
      idComp: 9,
      brandComp: 'Fiat',
      modelComp: 'Panda Classic',
      descriptionComp: 'Panda Classic est le nouveau nom donné depuis le 28 février 2024 à la Fiat Panda III sortie en 2011 afin de permettre au groupe Stellantis de commercialiser sous le nom de Fiat Grande Panda une variante de la Citroën C3 de 4e génération produite en Serbie. C\'est une petite citadine 4 ou 5 places développée par le constructeur automobile italien Fiat et produite depuis l\'automne 2011 dans l\'usine italienne de Pomigliano d\'Arco, près de Naples. Elle existe en deux versions : City et Pandina.',
      imageComp: 'fiat-panda.jpg'
    },
    {
      idComp: 10,
      brandComp: 'Ford',
      modelComp: 'Fiesta MkIV',
      descriptionComp: 'La Ford Fiesta est un modèle d\'automobile citadine polyvalente 3-5 portes produit par le constructeur américain Ford et que sa filiale Ford Europe produit de 1976 à 2023. Six versions successives de la Fiesta sont conçues depuis sa création. La petite Ford est produite uniquement en Europe jusqu\'en 1996, mais depuis le modèle et des variantes sont aussi produites dans les pays émergents (Brésil, Inde, Afrique du Sud) pour ces-dits marchés.<br>Comme pour la Fiesta de 1983, celle qui arrive en novembre 1995 est davantage un gros restylage qu\'une toute nouvelle génération. Elle profite toutefois, en plus d\'une ligne rajeunie caractérisée par son insolite calandre ovale, d\'une nouvelle génération de trains roulants qui corrige le défaut majeur des précédentes versions : la tenue de route.',
      imageComp: 'fiesta.jpg'
    }
  ]

  constructor() { }

  getCars(): Car[] {
    return this.carsComp;
  }

  getCarById(id: number): Car | undefined {
    return this.carsComp.find(car => car.idComp === id);
  }
}
