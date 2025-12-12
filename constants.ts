import { CourseModule } from './types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'lydnad',
    title: 'Del 1: Lydnad',
    description: 'Milgrams experiment, Hoflings fältstudie och etiska dilemman.',
    content: [
      {
        title: 'Stanley Milgrams Lydnadsexperiment',
        sections: [
          {
            type: 'paragraph',
            text: 'Milgrams experiment är ett av psykologins mest kända och kontroversiella studier. Syftet var att undersöka människors benägenhet att lyda auktoriteter, även när det innebar att skada en annan människa.'
          },
          {
            type: 'factbox',
            title: 'Metod och Genomförande',
            text: 'Deltagarna trodde att de deltog i en studie om minne och inlärning. De tilldelades rollen som "lärare" och skulle ge elektriska stötar till en "elev" (en skådespelare) varje gång denne svarade fel. Stötarna var fejkade, men skådespelaren simulerade smärta. När deltagaren tvekade, pressade forskaren (auktoriteten) dem att fortsätta med fraser som "Experimentet kräver att du fortsätter".'
          },
          {
            type: 'heading',
            text: 'Resultat och Slutsats'
          },
          {
            type: 'paragraph',
            text: 'Resultaten var chockerande för samtiden. En majoritet av deltagarna fortsatte att ge stötar upp till de högsta, potentiellt dödliga nivåerna, trots att "eleven" skrek av smärta eller blev tyst.'
          },
          {
            type: 'list',
            items: [
              'Resultat: Majoriteten lydde fullt ut.',
              'Slutsats: Auktoritet påverkar människors beslut betydligt starkare än vad vi intuitivt tror.'
            ]
          }
        ]
      },
      {
        title: 'Etiska Aspekter',
        sections: [
          {
            type: 'paragraph',
            text: 'Milgrams studie bröt mot flera moderna etiska riktlinjer, vilket ledde till striktare regler för psykologisk forskning.'
          },
          {
            type: 'list',
            items: [
              'Information om syfte: Milgram ljög för deltagarna (deception).',
              'Samtycke: Fanns formellt, men var baserat på felaktig information.',
              'Ingen skada: Ingen fysisk skada skedde, men deltagarna utsattes för extrem psykisk stress.',
              'Debriefing: Eftersom lögner användes krävdes en noggrann genomgång efteråt för att förklara sanningen.'
            ]
          }
        ]
      },
      {
        title: 'Hoflings Fältexperiment (1966)',
        sections: [
          {
            type: 'paragraph',
            text: 'För att bemöta kritiken om att Milgrams studie saknade realism (labbmiljö), genomförde Hofling en studie på riktiga sjukhus.'
          },
          {
            type: 'paragraph',
            text: 'Sjuksköterskor blev uppringda av en okänd "läkare" som beordrade dem att ge en farlig dos av en medicin till en patient. Detta bröt mot sjukhusets regler.'
          },
          {
            type: 'factbox',
            title: 'Resultat av Hoflings studie',
            text: '21 av 22 sjuksköterskor lydde ordern och var på väg att ge medicinen innan forskarna ingrep. Detta visar att lydnad mot auktoritet är stark även i verkliga arbetsmiljöer.'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'f1', term: 'Lydnad (Obedience)', definition: 'Att följa order eller instruktioner från en auktoritetsperson.' },
      { id: 'f2', term: 'Debriefing', definition: 'Ett samtal efter ett experiment där deltagarna får veta studiens sanna syfte och hantera eventuella känslor.' },
      { id: 'f3', term: 'Ekologisk validitet', definition: 'Hur väl en studie speglar verkliga situationer (kritik som riktades mot Milgram).' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Vad var det huvudsakliga resultatet i Milgrams lydnadsexperiment?',
        options: [
          'De flesta vägrade ge stötar när personen skrek.',
          'Endast sadistiska personer gav de högsta stötarna.',
          'En majoritet av deltagarna gav potentiellt dödliga stötar på order av auktoriteten.',
          'Kvinnor lydde mer än män.'
        ],
        correctIndex: 2,
        explanation: 'Milgram visade att vanliga människor kan utföra skadliga handlingar om de beordras av en legitim auktoritet.'
      },
      {
        id: 'q2',
        question: 'Vad visade Hoflings sjukhusstudie?',
        options: [
          'Att sjuksköterskor är bra på att ifrågasätta läkare.',
          'Att lydnad sker även i verkliga situationer utanför labbet.',
          'Att patienter litar blint på läkare.',
          'Att telefonkommunikation minskar lydnad.'
        ],
        correctIndex: 1,
        explanation: '21 av 22 sjuksköterskor lydde en farlig order från en okänd läkare, vilket bekräftade Milgrams fynd i en realistisk miljö.'
      }
    ]
  },
  {
    id: 'konformitet',
    title: 'Del 2: Konformitet',
    description: 'Aschs linjeexperiment, grupptryck och väntrumsexperimentet.',
    content: [
      {
        title: 'Aschs Linjeexperiment',
        sections: [
          {
            type: 'paragraph',
            text: 'Solomon Asch genomförde en klassisk studie för att undersöka grupptryckets effekt på individens omdöme.'
          },
          {
            type: 'factbox',
            title: 'Experimentupplägg',
            text: 'En försöksperson placerades i en grupp med skådespelare. Gruppen fick se linjer av olika längd och skulle matcha en testlinje med rätt jämförelselinje. Skådespelarna svarade konsekvent fel. Frågan var: Skulle den riktiga deltagaren lita på sina ögon eller följa gruppen?'
          },
          {
            type: 'paragraph',
            text: 'Resultatet visade att ca 75% av deltagarna konformerade (föll för grupptrycket) och svarade fel minst en gång. Slutsatsen är att människor har en stark drift att anpassa sig för att passa in.'
          }
        ]
      },
      {
        title: 'Faktorer som påverkar konformitet',
        sections: [
          {
            type: 'list',
            items: [
              'Bundsförvant: Om bara en annan person i gruppen svarar rätt, minskar konformiteten kraftigt.',
              'Gruppstorlek: Konformiteten ökar med gruppens storlek upp till en viss gräns.',
              'Osäkerhet/Självförtroende: Lågt självförtroende ökar risken att följa gruppen.',
              'Grupptillhörighet: Vi konformerar mer om vi känner stark samhörighet med gruppen.',
              'Neurovetenskap: Hjärnavbildning visar att social avvikelse kan aktivera samma områden som fysisk smärta.'
            ]
          }
        ]
      },
      {
        title: 'Etik i Asch & Väntrumsexperimentet',
        sections: [
          {
            type: 'paragraph',
            text: 'I det berömda "Väntrumsexperimentet" (där folk reser sig vid ett pip för att alla andra gör det) finns allvarliga etiska brister.'
          },
          {
            type: 'list',
            items: [
              'Informerat samtycke saknades helt.',
              'Ingen förvarning gavs till deltagarna.',
              'Detta bryter mot grundläggande forskningsetiska regler om respekt för individen.'
            ]
          }
        ]
      }
    ],
    flashcards: [
      { id: 'f4', term: 'Konformitet', definition: 'Att ändra sitt beteende eller sina åsikter för att matcha en grupp.' },
      { id: 'f5', term: 'Normativ social påverkan', definition: 'Vi anpassar oss för att bli omtyckta eller accepterade av gruppen.' },
      { id: 'f6', term: 'Informativ social påverkan', definition: 'Vi anpassar oss för att vi tror att gruppen har mer kunskap än vi själva.' }
    ],
    quiz: [
      {
        id: 'q3',
        question: 'Ungefär hur många konformerade minst en gång i Aschs experiment?',
        options: ['10%', '50%', '75%', '100%'],
        correctIndex: 2,
        explanation: 'Ca 75% av deltagarna gav efter för grupptrycket vid minst ett tillfälle under experimentet.'
      },
      {
        id: 'q4',
        question: 'Vilken faktor minskar konformitet mest effektivt?',
        options: [
          'Att gruppen är större.',
          'Att ha en bundsförvant som också avviker från gruppen.',
          'Att uppgiften är svår.',
          'Att man är trött.'
        ],
        correctIndex: 1,
        explanation: 'Närvaron av en enda person som håller med deltagaren (en allierad) bryter gruppens enighet och minskar trycket drastiskt.'
      }
    ]
  },
  {
    id: 'social-identitet',
    title: 'Del 3: Våra tankar om varandra',
    description: 'Rosenthaleffekten, Jane Elliotts klassrum och Social Identitetsteori.',
    content: [
      {
        title: 'Rosenthaleffekten (Pygmalioneffekten)',
        sections: [
          {
            type: 'paragraph',
            text: 'Våra förväntningar på andra kan omedvetet påverka deras prestationer. Detta kallas för en självuppfyllande profetia.'
          },
          {
            type: 'factbox',
            title: 'Studien i skolan',
            text: 'Lärare fick veta att vissa elever var "särskilt begåvade" (trots att de valts ut slumpmässigt). Efter en tid visade dessa elever faktiskt större förbättringar i IQ-test än övriga. Lärarnas positiva förväntningar ledde till att de gav dessa elever mer uppmärksamhet och uppmuntran.'
          }
        ]
      },
      {
        title: 'Jane Elliotts Klassrumsexperiment',
        sections: [
          {
            type: 'paragraph',
            text: 'Dagen efter mordet på Martin Luther King Jr. genomförde läraren Jane Elliott en övning för att lära sina elever om diskriminering.'
          },
          {
            type: 'list',
            items: [
              'Metod: Hon delade in klassen i blåögda och brunögda.',
              'Process: Den ena gruppen utsågs till "bättre" och fick privilegier (längre rast, sitta längst fram).',
              'Resultat: Den privilegierade gruppen blev snabbt arrogant och presterade bättre, medan den nedvärderade gruppen blev osäker och presterade sämre.'
            ]
          }
        ]
      },
      {
        title: 'Social Identitetsteori (Tajfel)',
        sections: [
          {
            type: 'paragraph',
            text: 'Henri Tajfel visade genom "Minimal Group Paradigm" att det krävs väldigt lite för att vi ska skapa grupper och börja favorisera "våra egna".'
          },
          {
            type: 'factbox',
            title: 'Definitioner',
            text: 'In-grupp: Den grupp vi känner tillhörighet till (Vi).\nUt-grupp: De som inte tillhör vår grupp (Dom).'
          },
          {
            type: 'paragraph',
            text: 'Vi bygger ofta vår självkänsla genom vår sociala identitet, vilket kan leda till att vi överdriver skillnaderna mellan grupper.'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'f7', term: 'Självuppfyllande profetia', definition: 'När en förväntan leder till beteenden som får förväntan att slå in (t.ex. Rosenthaleffekten).' },
      { id: 'f8', term: 'In-grupp', definition: 'Den sociala grupp en individ identifierar sig med.' },
      { id: 'f9', term: 'Minimal Group Paradigm', definition: 'Forskning som visar att vi bildar grupper och favoriserar dem baserat på triviala likheter (t.ex. gillar samma tavla).' }
    ],
    quiz: [
      {
        id: 'q5',
        question: 'Vad innebär Rosenthaleffekten?',
        options: [
          'Att elever presterar sämre under press.',
          'Att lärares förväntningar kan höja elevers prestation.',
          'Att intelligens är genetiskt.',
          'Att alla elever lär sig lika snabbt.'
        ],
        correctIndex: 1,
        explanation: 'Genom positiv särbehandling (omedvetet) från läraren presterade de "utvalda" eleverna bättre.'
      },
      {
        id: 'q6',
        question: 'Vad hände i Jane Elliotts klassrumsexperiment?',
        options: [
          'Barnen vägrade delta.',
          'De privilegierade barnen blev ödmjuka.',
          'Ett starkt "vi-och-dom"-tänkande skapades snabbt baserat på ögonfärg.',
          'Ingen skillnad i prestation märktes.'
        ],
        correctIndex: 2,
        explanation: 'Experimentet visade hur snabbt diskriminering och fördomar kan uppstå, samt hur det påverkar självkänsla och prestation.'
      }
    ]
  },
  {
    id: 'hjalpbeteende',
    title: 'Del 4: Hjälpbeteende',
    description: 'Prosocialt beteende, altruism och åskådareffekten.',
    content: [
      {
        title: 'Prosocialt beteende och Altruism',
        sections: [
          {
            type: 'paragraph',
            text: 'Prosocialt beteende är alla handlingar som gynnar andra människor. Altruism är en specifik form där man hjälper utan tanke på egen vinning, ibland till en kostnad för en själv.'
          }
        ]
      },
      {
        title: 'Åskådareffekten (Bystander Effect)',
        sections: [
          {
            type: 'factbox',
            title: 'Fenomenet',
            text: 'Ju fler vittnen som finns vid en nödsituation, desto mindre är sannolikheten att någon enskild person ingriper.'
          },
          {
            type: 'paragraph',
            text: 'Detta beror ofta på **ansvarsspridning**: "Någon annan ringer nog polisen".'
          }
        ]
      },
      {
        title: 'Det rökfyllda rummet',
        sections: [
          {
            type: 'paragraph',
            text: 'I ett klassiskt experiment fylldes ett väntrum med rök. '
          },
          {
            type: 'list',
            items: [
              'Ensam deltagare: Larmade nästan omedelbart.',
              'Grupp av deltagare: Satt kvar passiva mycket längre eftersom ingen annan reagerade (pluralistisk ignorans).'
            ]
          }
        ]
      },
      {
        title: 'Faktorer som påverkar om vi hjälper',
        sections: [
          {
            type: 'list',
            items: [
              'Likhet: Vi hjälper oftare de som liknar oss.',
              'Tidspress: Stress minskar hjälpbeteende drastiskt.',
              'Fysiskt avstånd: Lättare att ignorera lidande på håll.',
              'Kompetens: Om vi vet hur man gör HLR hjälper vi mer sannolikt.'
            ]
          }
        ]
      }
    ],
    flashcards: [
      { id: 'f10', term: 'Ansvarsspridning', definition: 'Fenomenet där individer känner mindre personligt ansvar när andra är närvarande.' },
      { id: 'f11', term: 'Altruism', definition: 'Osjälviskt hjälpbeteende utan förväntan på belöning.' },
      { id: 'f12', term: 'Pluralistisk ignorans', definition: 'När ingen i en grupp reagerar, tolkar alla situationen som ofarlig.' }
    ],
    quiz: [
      {
        id: 'q7',
        question: 'Vad innebär åskådareffekten?',
        options: [
          'Folk gillar att titta på olyckor.',
          'Ju fler vittnen, desto större chans att man får hjälp.',
          'Ju fler vittnen, desto mindre chans att någon ingriper.',
          'Vittnen brukar alltid filma istället för att hjälpa.'
        ],
        correctIndex: 2,
        explanation: 'Närvaron av andra späder ut ansvarkänslan, vilket gör att ingen agerar.'
      },
      {
        id: 'q8',
        question: 'Vilken faktor minskar sannolikheten att vi hjälper?',
        options: [
          'Att vi är ensamma.',
          'Att vi har gott om tid.',
          'Tidspress och stress.',
          'Att offret liknar oss.'
        ],
        correctIndex: 2,
        explanation: 'Forskning (t.ex. Darley & Batson) visar att om vi har bråttom är det mycket mindre sannolikt att vi stannar och hjälper.'
      }
    ]
  }
];