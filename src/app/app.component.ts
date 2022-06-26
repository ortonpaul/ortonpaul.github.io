import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  guess = "";
  placeholder = "";
  title = 'soundboard';
  showSoundboard = true;
  showAirports = false;
  showModal = false;
  airportText = "";
  countText = "";
  modalText = "";
  correctText = "";
  index = 0;
  completed = new Array<number>();
  count = 0;
  mode = 0;
  sounds: { name: string, path: string }[] = [
    { "name": "Paul eugh", "path": "../../assets/eugh.m4a"},
    { "name": "Payton meow", "path": "../../assets/meow.m4a"}
  ]

  destinations = {
    'DAL': 'Dallas (Love Field)',
    'SAT': 'San Antonio',
    'HOU': 'Houston (Hobby)',
    'HRL': 'Harlingen / South Padre Island',
    'CRP': 'Corpus Christi',
    'LBB': 'Lubbock',
    'MAF': 'Midland/Odessa',
    'ELP': 'El Paso',
    'AUS': 'Austin',
    'AMA': 'Amarillo',
    'MSY': 'New Orleans',
    'OKC': 'Oklahoma City',
    'TUL': 'Tulsa',
    'ABQ': 'Albuquerque',
    'LAS': 'Las Vegas',
    'PHX': 'Phoenix',
    'SAN': 'San Diego',
    'MCI': 'Kansas City',
    'LAX': 'Los Angeles',
    'LIT': 'Little Rock',
    'MDW': 'Chicago (Midway)',
    'STL': 'St. Louis',
    'ONT': 'Ontario',
    'BNA': 'Nashville',
    'BHM': 'Birmingham',
    'DTW': 'Detroit',
    'IND': 'Indianapolis',
    'OAK': 'Oakland',
    'BUR': 'Burbank',
    'RNO': 'Reno',
    'SMF': 'Sacramento',
    'CLE': 'Cleveland',
    'CMH': 'Columbus',
    'SDF': 'Louisville',
    'SJC': 'San Jose, California',
    'BWI': 'Baltimore / Washington',
    'SNA': 'Orange County',
    'PDX': 'Portland, OR',
    'SEA': 'Seattle/Tacoma',
    'GEG': 'Spokane',
    'BOI': 'Boise',
    'SLC': 'Salt Lake City',
    'TUS': 'Tucson',
    'OMA': 'Omaha',
    'FLL': 'Ft. Lauderdale / Hollywood',
    'TPA': 'Tampa Bay',
    'MCO': 'Orlando',
    'PVD': 'Providence',
    'JAX': 'Jacksonville',
    'MHT': 'Manchester',
    'ISP': 'Long Island / Islip MacArthur',
    'RDU': 'Raleigh / Durham',
    'BDL': 'Hartford / Springfield',
    'ALB': 'Albany',
    'BUF': 'Buffalo / Niagara Falls',
    'PBI': 'West Palm Beach',
    'ORF': 'Norfolk / Virginia Beach',
    'PHL': 'Philadelphia',
    'PIT': 'Pittsburgh',
    'RSW': 'Ft. Myers / Naples',
    'DEN': 'Denver',
    'IAD': 'Washington D.C. (Dulles)',
    'SFO': 'San Francisco',
    'MSP': 'Minneapolis / St. Paul',
    'LGA': 'New York (LaGuardia)',
    'BOS': 'Boston Logan',
    'MKE': 'Milwaukee',
    'ECP': 'Panama City Beach, FL',
    'GSP': 'Greenville-Spartanburg',
    'CHS': 'Charleston',
    'ATL': 'Atlanta',
    'DCA': 'Washington D.C. (Reagan National)',
    'DSM': 'Des Moines',
    'CLT': 'Charlotte',
    'SJU': 'San Juan',
    'ROC': 'Rochester',
    'PWM': 'Portland, ME',
    'ICT': 'Wichita',
    'GRR': 'Grand Rapids',
    'MEM': 'Memphis',
    'PNS': 'Pensacola',
    'RIC': 'Richmond',
    'MBJ': 'Montego Bay',
    'AUA': 'Aruba',
    'NAS': 'Nassau',
    'CUN': 'Cancún',
    'SJD': 'San Jose del Cabo / Los Cabos',
    'PUJ': 'Punta Cana',
    'SJO': 'San Jose, Costa Rica',
    'PVR': 'Puerto Vallarta',
    'BZE': 'Belize',
    'LIR': 'Liberia / Guanacaste, Costa Rica',
    'LGB': 'Long Beach',
    'HAV': 'Havana',
    'GCM': 'Grand Cayman',
    'CVG': 'Cincinnati',
    'PLS': 'Turks & Caicos',
    'HNL': 'Honolulu (Oahu)',
    'OGG': 'Kahului (Maui)',
    'KOA': 'Kona (Island of Hawaii)',
    'LIH': 'Lihue (Kauai)',
    'ITO': 'Hilo (Island of Hawaii)',
    'CZM': 'Cozumel',
    'MIA': 'Miami',
    'PSP': 'Palm Springs, Calif.',
    'HDN': 'Steamboat Springs, Colo.',
    'MTJ': 'Montrose (Telluride), Colo.',
    'ORD': 'Chicago (O’Hare)',
    'SRQ': 'Sarasota / Bradenton',
    'COS': 'Colorado Springs',
    'SAV': 'Savannah / Hilton Head',
    'SBA': 'Santa Barbara, Calif',
    'IAH': 'Houston (Bush)',
    'FAT': 'Fresno, Calif.',
    'VPS': 'Destin / Ft. Walton Beach',
    'MYR': 'Myrtle Beach S.C.',
    'BZN': 'Bozeman',
    'JAN': 'Jackson, Miss.',
    'EUG': 'Eugene, Ore.',
    'BLI': 'Bellingham, Wash.',
    'SYR': 'Syracuse'
  };
  length = Object.keys(this.destinations).length;

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.count = 1;
    this.placeholder = "COU";
    this.completed = [];
    this.index = this.generateIndex();
    this.updateDisplay();
    this.chooseCodes();
  }

  chooseNames() {
    this.mode = 0;
    this.placeholder = "Columbia Regional Airport";
    this.resetApp();
  }

  chooseCodes() {
    this.mode = 1;
    this.placeholder = "COU";
    this.resetApp();
  }

   resetApp() {
    this.count = 1;
    this.completed = new Array<number>();
    this.index = this.generateIndex();
    this.updateDisplay();
  }

   updateDisplay() {
    if (this.mode == 0) {
      this.airportText = Object.keys(this.destinations)[this.index];
    } else {
      this.airportText = Object.values(this.destinations)[this.index];
    }
    this.guess = "";
  }

   skip() {
     this.showModal = true;
     this.modalText = "The airport you skipped was " + Object.values(this.destinations)[this.index] + " with code " + Object.keys(this.destinations)[this.index];
  }

  async checkGuess() {
    var actual;
    var banner;
    if (this.mode == 0) {
      actual = Object.values(this.destinations)[this.index];
    } else {
      actual = Object.keys(this.destinations)[this.index];
    }

    if (this.guess.toUpperCase() == actual.toUpperCase()) {
      this.count++;

      if (this.count > this.length) {
        this.resetApp();
      }

      banner = document.getElementById('success')
      this.randomizeCorrectText();
      this.completed.push(this.index);
      this.index = this.generateIndex();
      this.updateDisplay();
    } else {
      banner = document.getElementById('failure')
      let audio = new Audio();
      audio.src = "../assets/eugh.m4a";
      audio.load();
      var promise = audio.play();
  
      if(promise !== undefined) {
        promise.then().catch(function(error){
          window.alert(error);
        })
      }
      }

    banner?.classList.remove("hidden");
    console.log("test");
    await new Promise(resolve => setTimeout(resolve, 500));
    banner?.classList.add("fade-out");
    await new Promise(resolve => setTimeout(resolve, 500));
    banner?.classList.remove("fade-out");
    banner?.classList.add("hidden");
  }

   closeModal() {
     this.showModal = false;
    this.index = this.generateIndex();
    this.updateDisplay();
  }

  toggleView = () => {
    this.showSoundboard = !this.showSoundboard;
    this.showAirports = !this.showAirports;
  }

   generateIndex() {
    let n = Math.floor(Math.random() * this.length);

    while (this.completed.includes(n)) {
      n = Math.floor(Math.random() * this.length);
    }

    return n;
  }

  randomizeCorrectText() {
    let texts = [
      "Correct!",
      "You better work",
      "Slayyyyyy",
      "YASSSSS",
      "Okay Girlboss!",
      "Go besite ❤"
    ];

    let n = Math.floor(Math.random() * texts.length);

    this.correctText = texts[n];
  }
}