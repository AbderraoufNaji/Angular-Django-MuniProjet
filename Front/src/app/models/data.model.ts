import { Commune } from './commune.model';
import { Question } from './question.model';
import { Wilaya } from './wilaya.model';
export class Data {
  public questionsList: Question[] = [];
  wilayas: Wilaya[] = [];
  communes: Commune[] = [];

  question1 = new Question(1, 'age', 'Votre âge', []);
  question2 = new Question(2, 'sexe', 'Votre sexe', ['Homme', 'Femme']);
  question3 = new Question(3, 'wilaya', 'Votre wilaya de résidence', []);
  question4 = new Question(4, 'commune', 'Votre commune de résidence', []);
  question5 = new Question(
    5,
    'a_fait_test',
    "Avez-vous déjà fait un test de dépistage de l'hépatite ?",
    ['Oui', 'Non']
  );
  question6 = new Question(
    6,
    'frequence_a_boire_alcool',
    "À quelle fréquence buvez-vous de l'alcool ?",
    ['Jamais', 'Occasionnellement', 'Quotidiennement']
  );
  question7 = new Question(
    7,
    'frequence_a_utiliser_drogue',
    'À quelle fréquence utilisez-vous des drogues ?',
    ['Jamais', 'Occasionnellement', 'Quotidiennement']
  );
  question8 = new Question(
    8,
    'a_des_rapports_sexuels_non_proteges',
    'Avez-vous des rapports sexuels non protégés ?',
    ['Oui', 'Non']
  );
  question9 = new Question(
    9,
    'a_ete_vaccine',
    "Avez-vous été vacciné(e) contre l'hépatite B ?",
    ['Oui', 'Non']
  );
  question10 = new Question(
    10,
    'a_remarquer_jaunisse',
    'Avez-vous remarque une jaunisse ou une urine foncée récemment?',
    ['Oui', 'Non']
  );
  question11 = new Question(
    11,
    'avez_vous_etes_diagnostiquer',
    'Avez-vous été diagnostiquer auparavant avec une hépatite ou une maladie du foie?',
    ['Oui', 'Non']
  );
  question12 = new Question(
    12,
    'avez_vous_voyager',
    "Avez-vous voyager dans une région au haute risque d'hépatite?",
    ['Oui', 'Non']
  );
  question13 = new Question(
    13,
    'avez_vous_ressenti_fatigue',
    'Avez-vous ressenti de la fatigue, des nausées, des vomissements ou des douleurs abdominales récemment?',
    ['Oui', 'Non']
  );

  baseData = `1,Tunis,get-communes-Tunis/,Carthage,La Marsa,Sidi Bou Said,Le Bardo
  2,Ariana,get-communes-Ariana/,Ariana,Ville,La Soukra
  3,Ben Arous,get-communes-Ben-Arous/,Ben Arous,Mornag,El Mourouj
  4,Manouba,get-communes-Manouba/,Manouba,Den Den,Oued Ellil
  5,Nabeul,get-communes-Nabeul/,Nabeul,Hammamet,Kelibia,Menzel Temime
  6,Zaghouan,get-communes-Zaghouan/,Zaghouan,Djebel Oust,Teboursouk
  7,Béja,get-communes-Béja/,Béja,Nefza,Téboursouk,Téboursouk
  8,Jendouba,get-communes-Jendouba/,Jendouba,Ghardimaou,Aïn Draham,Taberma
  9,Kef,get-communes-Kef/,Le Kef,Djerissa,Kalaat Senan,Sers
  10,Siliana,get-communes-Siliana/,Siliana,Bouarada,Makthar,Rouhia
  11,Sousse,get-communes-Sousse/,Sousse,Hergla,Kalaa Kebira,Kalaa Seghira,M'saken
  12,Monastir,get-communes-Monastir/,Monastir,Ksibet Thrayet,Jemmal,Téboulba
  13,Mahdia,get-communes-Mahdia/,Mahdia,Boumerdès,El Jem,Essouassi
  14,Sfax,get-communes-Sfax/,Sfax,Sakiet Eddaïer,Mahrès
  15,Kairouan,get-communes-Kairouan/,Kairouan,Oueslatia,Sbikha,Haffouz
  16,Kasserine,get-communes-Kasserine/,Kasserine,Le Kef,Haïdra,Sbeitla
  17,Sidi Bouzid,get-communes-Sidi-Bouzid/,Sidi Bouzid,Meknassi,Regueb,Jilma
  18,Gabès,get-communes-Gabès/,Gabès,El Hamma,Mareth,Menzel Habib
  19,Medenine,get-communes-Medenine/,Medenine,Ben Guerdane,Djerba Midoun,Zarzis
  20,Tataouine,get-communes-Tataouine/,Tataouine,Bir Lahmar,Dehiba,Ghomrassen`


  constructor() {
    this.setListQuestions();
  }

  private setListQuestions() {
    this.questionsList.push(this.question1);
    this.questionsList.push(this.question2);
    this.questionsList.push(this.question3);
    this.questionsList.push(this.question4);
    this.questionsList.push(this.question5);
    this.questionsList.push(this.question6);
    this.questionsList.push(this.question7);
    this.questionsList.push(this.question8);
    this.questionsList.push(this.question9);
    this.questionsList.push(this.question10);
    this.questionsList.push(this.question11);
    this.questionsList.push(this.question12);
    this.questionsList.push(this.question13);


    /*une boucle forEach est utilisée pour boucler sur chaque élément du tableau
     communes_names et créer une nouvelle instance de la classe Commune avec la valeur de l'élément 
     comme paramètre name. Chaque instance de Commune est ensuite poussée dans le tableau communes
      et dans un tableau global this.communes.
une nouvelle instance de la classe Wilaya est créée avec code, nom, urlForBack, et communes comme 
paramètres de constructeur. Cette instance est ensuite poussée dans un tableau global this.wilayas.
*/
    this.baseData.split('\n').forEach((wilaya) => {
      const line = wilaya.split(',');
      const code = line[0];
      const nom = line[1];
      const urlForBack = line[2];
      const communes_names = line.slice(3, line.length - 1);
      const communes: Commune[] = [];
      communes_names.forEach((name)=>{
        communes.push(new Commune(name));
        this.communes.push(new Commune(name));
      });
      this.wilayas.push(new Wilaya(code, nom,urlForBack,communes));
    });
  }
}
