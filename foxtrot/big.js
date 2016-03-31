var app = angular.module('codecraft', []);

app.controller('PersonsController', function ($scope) {

  $scope.search = "";
  $scope.order = "email";
  $scope.selectedIndex = null;
  $scope.selectedPerson = null;

  $scope.selectPerson = function (person, index) {
    $scope.selectedIndex = index;
    $scope.selectedPerson = person;
  };

  // $scope.sensitiveSearch = function(person) {
  //   if ($scope.search) {
  //     return person.name.indexOf($scope.search) == 0 ||
  //            person.email.indexOf($scope.search) == 0;
  //   }
  //   return true;
  // };

// name, country, secret, phone, birthdate, email.
  $scope.persons = [
  {"name": "Maisie", "country": "Suriname", "secret": "-1.0316523972201", "phone": "1-317-180-5259", "birthdate": "Jun 13, 2015", "email": "nec.luctus.felis@egestas.com"},
  {"name": "Dieter", "country": "Palestine, State of", "secret": "-0.12287353149291", "phone": "1-645-250-5233", "birthdate": "Oct 8, 2016", "email": "placerat.eget.venenatis@enimcondimentumeget.ca"},
  {"name": "Zane", "country": "Congo, the Democratic Republic of the", "secret": "-1.7515992658409", "phone": "1-715-516-4828", "birthdate": "May 4, 2015", "email": "faucibus.leo@magnaSuspendisse.edu"},
  {"name": "Julie", "country": "Nepal", "secret": "-1.9175274904958", "phone": "768-8584", "birthdate": "May 25, 2016", "email": "mauris.ut@loremipsumsodales.com"},
  {"name": "Castor", "country": "Bolivia", "secret": "-0.18951786288571", "phone": "1-446-426-1828", "birthdate": "Mar 30, 2016", "email": "risus@idante.ca"},
  {"name": "Timon", "country": "Dominica", "secret": "-2.8519251269021", "phone": "1-877-388-7503", "birthdate": "Aug 12, 2016", "email": "ac.libero.nec@pharetraQuisqueac.co.uk"},
  {"name": "Regan", "country": "Azerbaijan", "secret": "0.46250440227926", "phone": "344-7310", "birthdate": "Jun 11, 2015", "email": "laoreet.lectus@Aliquam.edu"},
  {"name": "Rachel", "country": "Malaysia", "secret": "-1.2706219262826", "phone": "728-9991", "birthdate": "Mar 12, 2017", "email": "erat@faucibus.org"},
  {"name": "Hannah", "country": "Bahrain", "secret": "-2.1546177631154", "phone": "412-0118", "birthdate": "Apr 26, 2016", "email": "ut@vestibulumlorem.com"},
  {"name": "Odysseus", "country": "Slovakia", "secret": "1.3952490261321", "phone": "1-194-849-4586", "birthdate": "Jul 8, 2016", "email": "magnis@acmattis.net"},
  {"name": "Ciara", "country": "Grenada", "secret": "0.31594872285045", "phone": "751-3335", "birthdate": "Dec 2, 2016", "email": "sagittis.felis.Donec@sitametmetus.co.uk"},
  {"name": "Otto", "country": "Christmas Island", "secret": "-0.67329787108123", "phone": "1-621-213-3825", "birthdate": "Dec 1, 2016", "email": "Suspendisse.eleifend@ettristique.co.uk"},
  {"name": "Aubrey", "country": "Taiwan", "secret": "3.7904189183751", "phone": "199-3655", "birthdate": "Feb 17, 2016", "email": "enim@arcuac.ca"},
  {"name": "Timothy", "country": "France", "secret": "-2.3238186164656", "phone": "185-8302", "birthdate": "Mar 8, 2016", "email": "ipsum.primis.in@auctorquistristique.edu"},
  {"name": "Isaiah", "country": "Kyrgyzstan", "secret": "0.35644317519253", "phone": "1-366-858-4210", "birthdate": "Apr 30, 2016", "email": "leo@blanditat.net"},
  {"name": "Amy", "country": "Armenia", "secret": "1.2018714733448", "phone": "1-322-634-6139", "birthdate": "Jan 8, 2016", "email": "tempus.scelerisque.lorem@Phaselluslibero.co.uk"},
  {"name": "Carissa", "country": "Gibraltar", "secret": "-2.9536345730699", "phone": "1-512-554-3250", "birthdate": "Sep 6, 2016", "email": "eu.dui@Sedeunibh.org"},
  {"name": "Julian", "country": "Algeria", "secret": "-1.8371005512025", "phone": "1-855-483-6375", "birthdate": "Jan 13, 2017", "email": "malesuada@montesnasceturridiculus.net"},
  {"name": "Samson", "country": "Papua New Guinea", "secret": "-1.1314431280385", "phone": "1-550-491-3398", "birthdate": "Dec 1, 2016", "email": "Curabitur.sed.tortor@hendreritconsectetuer.edu"},
  {"name": "Kenneth", "country": "Suriname", "secret": "-0.90499872348833", "phone": "447-9838", "birthdate": "Aug 8, 2016", "email": "est@maurisInteger.net"},
  {"name": "Sigourney", "country": "Wallis and Futuna", "secret": "-0.69039105100789", "phone": "1-656-752-8316", "birthdate": "Feb 19, 2016", "email": "mauris.elit@aliquetPhasellusfermentum.ca"},
  {"name": "Germane", "country": "Slovenia", "secret": "1.6419624829088", "phone": "756-1855", "birthdate": "Oct 5, 2015", "email": "dolor.Donec@diam.com"},
  {"name": "Nadine", "country": "Heard Island and Mcdonald Islands", "secret": "0.6470108555653", "phone": "579-3990", "birthdate": "Dec 13, 2016", "email": "semper@nisl.co.uk"},
  {"name": "Shea", "country": "Comoros", "secret": "-1.9744242230287", "phone": "642-1442", "birthdate": "Nov 3, 2016", "email": "Phasellus@Curabitur.com"},
  {"name": "Trevor", "country": "Burundi", "secret": "-0.97542736957068", "phone": "1-837-408-4078", "birthdate": "Jul 26, 2015", "email": "aliquet.sem.ut@gravidasitamet.org"},
  {"name": "Hasad", "country": "Tuvalu", "secret": "2.8938320211441", "phone": "1-585-742-0618", "birthdate": "Sep 3, 2015", "email": "Proin.nisl.sem@eleifendnondapibus.ca"},
  {"name": "Wallace", "country": "Norway", "secret": "4.4695176804538", "phone": "794-0144", "birthdate": "Nov 1, 2016", "email": "pede.malesuada@at.co.uk"},
  {"name": "Ocean", "country": "Malaysia", "secret": "0.97909069424424", "phone": "832-9185", "birthdate": "Aug 25, 2016", "email": "laoreet.lectus@Cras.ca"},
  {"name": "Joel", "country": "Peru", "secret": "1.43446469076", "phone": "1-641-445-0039", "birthdate": "Dec 3, 2015", "email": "mi.felis.adipiscing@ultricesposuere.net"},
  {"name": "Leslie", "country": "Niger", "secret": "-0.43191848818343", "phone": "417-6458", "birthdate": "Feb 16, 2016", "email": "non.dapibus.rutrum@enimcondimentum.co.uk"},
  {"name": "Keegan", "country": "Eritrea", "secret": "-0.19621566725862", "phone": "1-487-773-0821", "birthdate": "Dec 12, 2016", "email": "risus.Donec@vel.ca"},
  {"name": "Lucian", "country": "Hong Kong", "secret": "-0.59357180121663", "phone": "1-698-700-0449", "birthdate": "Jun 18, 2015", "email": "Donec@imperdiet.ca"},
  {"name": "Sierra", "country": "Mauritius", "secret": "-1.3302047272193", "phone": "550-0014", "birthdate": "Feb 11, 2016", "email": "Integer.id.magna@lobortisClass.edu"},
  {"name": "Brennan", "country": "Morocco", "secret": "1.2547022375777", "phone": "1-967-909-3051", "birthdate": "Apr 16, 2015", "email": "lorem@tortornibhsit.org"},
  {"name": "Duncan", "country": "Togo", "secret": "-0.38444972423594", "phone": "1-464-355-4216", "birthdate": "Feb 21, 2016", "email": "dui.nec@velnisl.net"},
  {"name": "Joseph", "country": "Åland Islands", "secret": "-2.4862093372837", "phone": "1-490-271-5630", "birthdate": "Nov 7, 2016", "email": "fermentum.risus@risusNullaeget.co.uk"},
  {"name": "Joan", "country": "Cameroon", "secret": "1.563030224303", "phone": "1-220-416-6222", "birthdate": "May 8, 2016", "email": "lorem.ac.risus@egestas.co.uk"},
  {"name": "Erica", "country": "Montserrat", "secret": "1.4956043726251", "phone": "1-648-900-9348", "birthdate": "May 29, 2015", "email": "ac.mi.eleifend@atarcu.org"},
  {"name": "Nola", "country": "Greenland", "secret": "0.69234861721756", "phone": "1-656-106-3098", "birthdate": "Jun 1, 2015", "email": "Duis.at.lacus@laoreetipsum.ca"},
  {"name": "Dane", "country": "Liechtenstein", "secret": "1.1902152217405", "phone": "1-544-685-7615", "birthdate": "Sep 27, 2015", "email": "faucibus.orci.luctus@imperdietnonvestibulum.ca"},
  {"name": "Kevin", "country": "Heard Island and Mcdonald Islands", "secret": "4.7107015911961", "phone": "1-598-140-0067", "birthdate": "Jan 13, 2017", "email": "cursus.purus@Proin.co.uk"},
  {"name": "Kane", "country": "Jersey", "secret": "0.17180617367784", "phone": "896-9143", "birthdate": "Sep 6, 2016", "email": "scelerisque.neque@etmagnisdis.edu"},
  {"name": "Quamar", "country": "Cook Islands", "secret": "-0.01993329896911", "phone": "390-4381", "birthdate": "Nov 9, 2016", "email": "nonummy.ac@Cras.org"},
  {"name": "Gay", "country": "Portugal", "secret": "3.0418398723513", "phone": "1-920-931-2063", "birthdate": "Jan 12, 2017", "email": "amet.ornare.lectus@nunc.com"},
  {"name": "Deborah", "country": "Germany", "secret": "2.6514797171676", "phone": "826-4839", "birthdate": "Nov 14, 2015", "email": "vitae@sit.net"},
  {"name": "Lars", "country": "Armenia", "secret": "2.441060536725", "phone": "1-440-211-2679", "birthdate": "Jun 8, 2015", "email": "Nunc@ultricies.net"},
  {"name": "Karly", "country": "Belize", "secret": "-3.833450736656", "phone": "1-668-928-0091", "birthdate": "Apr 19, 2016", "email": "a.facilisis@Vestibulumanteipsum.com"},
  {"name": "Igor", "country": "Turkmenistan", "secret": "-0.23356817443762", "phone": "1-949-373-3900", "birthdate": "Jul 17, 2015", "email": "sapien.Nunc.pulvinar@arcu.org"},
  {"name": "Joel", "country": "Nepal", "secret": "2.9212673073346", "phone": "1-996-960-6283", "birthdate": "Apr 2, 2015", "email": "lobortis.ultrices.Vivamus@justoPraesentluctus.com"},
  {"name": "Claire", "country": "Ecuador", "secret": "2.3642503921125", "phone": "1-700-693-4758", "birthdate": "Mar 3, 2016", "email": "eros@augue.ca"},
  {"name": "Sybil", "country": "Suriname", "secret": "0.69743491383569", "phone": "1-297-586-7615", "birthdate": "Oct 18, 2016", "email": "nibh.Quisque.nonummy@In.edu"},
  {"name": "Bradley", "country": "Singapore", "secret": "0.78704108906812", "phone": "1-440-495-1909", "birthdate": "Apr 25, 2015", "email": "vestibulum.massa.rutrum@lobortis.com"},
  {"name": "Kieran", "country": "Norfolk Island", "secret": "0.521598090842", "phone": "567-7052", "birthdate": "Dec 20, 2015", "email": "eu.augue@feugiatLoremipsum.ca"},
  {"name": "Grace", "country": "Georgia", "secret": "-1.3383064533877", "phone": "1-827-462-5267", "birthdate": "Apr 27, 2016", "email": "tempus@Duisat.com"},
  {"name": "Coby", "country": "Samoa", "secret": "-1.0930803195209", "phone": "982-0365", "birthdate": "Jul 31, 2016", "email": "eu.arcu.Morbi@justoeuarcu.edu"},
  {"name": "Griffin", "country": "French Southern Territories", "secret": "0.95543454637248", "phone": "653-1520", "birthdate": "Oct 29, 2016", "email": "nunc.nulla.vulputate@ipsumdolorsit.edu"},
  {"name": "Ima", "country": "Marshall Islands", "secret": "0.59858501204728", "phone": "1-977-278-1490", "birthdate": "Mar 1, 2017", "email": "habitant.morbi@imperdietornareIn.net"},
  {"name": "Roth", "country": "French Southern Territories", "secret": "-0.86355072370624", "phone": "1-847-709-5210", "birthdate": "Oct 29, 2016", "email": "vel.nisl.Quisque@Lorem.edu"},
  {"name": "Keegan", "country": "Netherlands", "secret": "-0.022109671970386", "phone": "1-394-455-0474", "birthdate": "Dec 1, 2015", "email": "Phasellus.in@auctorullamcorpernisl.org"},
  {"name": "Gail", "country": "Yemen", "secret": "-1.4437310604666", "phone": "551-4192", "birthdate": "Jul 8, 2015", "email": "pede@placeratCrasdictum.net"},
  {"name": "Tyrone", "country": "Montenegro", "secret": "0.44573613100455", "phone": "1-835-440-5097", "birthdate": "Feb 3, 2017", "email": "tellus.Aenean.egestas@atarcuVestibulum.ca"},
  {"name": "Kareem", "country": "United States Minor Outlying Islands", "secret": "-0.38084872117335", "phone": "1-485-620-2094", "birthdate": "Mar 28, 2016", "email": "amet.diam.eu@molestie.org"},
  {"name": "Zeph", "country": "San Marino", "secret": "-1.8662451683762", "phone": "544-7081", "birthdate": "Mar 11, 2017", "email": "Vivamus.nisi@duilectusrutrum.net"},
  {"name": "Coby", "country": "Somalia", "secret": "-0.10718715961333", "phone": "1-573-639-5811", "birthdate": "Jun 1, 2016", "email": "et.nunc@Sedeueros.co.uk"},
  {"name": "Erin", "country": "Fiji", "secret": "-1.9697187320069", "phone": "752-1851", "birthdate": "Nov 23, 2016", "email": "nunc@inhendrerit.net"},
  {"name": "Catherine", "country": "Gabon", "secret": "3.1161655173764", "phone": "1-207-980-6521", "birthdate": "Oct 6, 2015", "email": "nibh.Aliquam@malesuada.net"},
  {"name": "Maxwell", "country": "Maldives", "secret": "-0.45534144323847", "phone": "402-7411", "birthdate": "Oct 14, 2015", "email": "dictum.eu@eget.org"},
  {"name": "Conan", "country": "India", "secret": "2.3153164039272", "phone": "1-850-409-4920", "birthdate": "Feb 25, 2017", "email": "in.faucibus@quam.com"},
  {"name": "Serena", "country": "Ukraine", "secret": "-1.9966908072098", "phone": "223-5104", "birthdate": "Aug 7, 2015", "email": "Nunc.laoreet@eu.ca"},
  {"name": "Cooper", "country": "Libya", "secret": "-2.0978293176832", "phone": "1-534-936-7202", "birthdate": "May 4, 2016", "email": "faucibus.orci@dolorQuisque.com"},
  {"name": "Lewis", "country": "Papua New Guinea", "secret": "2.4739830788234", "phone": "1-143-385-2566", "birthdate": "Jun 5, 2016", "email": "est.congue.a@velit.com"},
  {"name": "Jennifer", "country": "Afghanistan", "secret": "-1.1130554980259", "phone": "667-0031", "birthdate": "Nov 16, 2015", "email": "aliquet.vel@cursus.com"},
  {"name": "Desirae", "country": "Zimbabwe", "secret": "-2.2971614274221", "phone": "1-979-333-0133", "birthdate": "Aug 2, 2015", "email": "magna.Ut@Donec.co.uk"},
  {"name": "Teagan", "country": "Portugal", "secret": "1.8808918636107", "phone": "402-1456", "birthdate": "Dec 4, 2016", "email": "rutrum.justo.Praesent@dolor.co.uk"},
  {"name": "Mara", "country": "Austria", "secret": "0.48255175858885", "phone": "793-6101", "birthdate": "May 21, 2016", "email": "non.massa@liberoatauctor.ca"},
  {"name": "Dennis", "country": "Hong Kong", "secret": "1.1182690031451", "phone": "607-1440", "birthdate": "Mar 20, 2016", "email": "pellentesque@nonummy.net"},
  {"name": "Kuame", "country": "Costa Rica", "secret": "3.2557243082615", "phone": "450-5171", "birthdate": "Sep 21, 2015", "email": "iaculis@lectusjusto.co.uk"},
  {"name": "Kevyn", "country": "Hungary", "secret": "-1.0443646216696", "phone": "119-3211", "birthdate": "Sep 7, 2016", "email": "elementum.dui@et.org"},
  {"name": "Jasper", "country": "Ghana", "secret": "-1.0337407432109", "phone": "153-3609", "birthdate": "Nov 2, 2016", "email": "elit.pretium.et@purusmauris.edu"},
  {"name": "Penelope", "country": "Isle of Man", "secret": "2.4424858890771", "phone": "1-921-676-1730", "birthdate": "Jul 5, 2016", "email": "elit.dictum@Maecenaslibero.co.uk"},
  {"name": "Audra", "country": "Norfolk Island", "secret": "-0.066291364996027", "phone": "1-100-729-9755", "birthdate": "Jul 7, 2015", "email": "id@rhoncusNullamvelit.co.uk"},
  {"name": "Zeph", "country": "Burkina Faso", "secret": "-0.025826964471245", "phone": "1-412-798-6965", "birthdate": "May 19, 2015", "email": "nunc@scelerisquesed.com"},
  {"name": "Randall", "country": "Portugal", "secret": "-0.47588587548863", "phone": "541-3745", "birthdate": "Jan 10, 2016", "email": "imperdiet.non.vestibulum@primisin.org"},
  {"name": "Uma", "country": "Turks and Caicos Islands", "secret": "1.0246691744488", "phone": "1-524-589-5311", "birthdate": "Jul 9, 2016", "email": "In.ornare@Inornare.ca"},
  {"name": "Ursula", "country": "Micronesia", "secret": "0.35518797053955", "phone": "1-809-723-7007", "birthdate": "Dec 13, 2015", "email": "turpis.nec@tristiqueac.net"},
  {"name": "Axel", "country": "Isle of Man", "secret": "0.5661817258721", "phone": "1-581-125-6765", "birthdate": "Dec 1, 2015", "email": "Phasellus.at@semperduilectus.edu"},
  {"name": "Mallory", "country": "Mozambique", "secret": "-0.86825817866979", "phone": "1-416-485-3881", "birthdate": "Dec 16, 2015", "email": "sociosqu.ad.litora@loremsitamet.edu"},
  {"name": "Wynter", "country": "Monaco", "secret": "-0.56711397292297", "phone": "1-483-417-1873", "birthdate": "Feb 1, 2017", "email": "nulla.Donec@Curabiturvel.edu"},
  {"name": "Melodie", "country": "Bangladesh", "secret": "-2.6952192618148", "phone": "1-504-443-6526", "birthdate": "Apr 28, 2016", "email": "mi.lorem@etrutrum.edu"},
  {"name": "Dieter", "country": "Cameroon", "secret": "-1.71857876563", "phone": "1-654-788-3442", "birthdate": "Apr 7, 2015", "email": "ante.blandit.viverra@utpellentesqueeget.ca"},
  {"name": "Arden", "country": "Slovakia", "secret": "-2.8443834859314", "phone": "627-0162", "birthdate": "Jun 13, 2015", "email": "lacus@eutelluseu.ca"},
  {"name": "Whitney", "country": "Bhutan", "secret": "0.46329577327817", "phone": "1-400-963-4516", "birthdate": "Jul 20, 2015", "email": "nec@auctorvelit.ca"},
  {"name": "Camilla", "country": "Gibraltar", "secret": "-1.3329431559458", "phone": "1-807-426-9679", "birthdate": "Sep 29, 2016", "email": "ut.nisi.a@adipiscingelit.ca"},
  {"name": "James", "country": "Equatorial Guinea", "secret": "-3.313445887324", "phone": "1-494-965-8059", "birthdate": "May 28, 2016", "email": "diam@tincidunt.ca"},
  {"name": "Ayanna", "country": "Western Sahara", "secret": "-3.3685573030641", "phone": "766-8108", "birthdate": "Oct 20, 2015", "email": "lectus.ante@eleifendnec.com"},
  {"name": "Ella", "country": "Curaçao", "secret": "-0.78812779903298", "phone": "1-262-609-7830", "birthdate": "Feb 18, 2017", "email": "adipiscing.elit.Etiam@tempor.org"},
  {"name": "Tatum", "country": "Seychelles", "secret": "-4.0183801171647", "phone": "440-9876", "birthdate": "Dec 2, 2016", "email": "mi.pede@magnaatortor.com"},
  {"name": "Yvette", "country": "Macedonia", "secret": "-2.7247810349412", "phone": "1-517-124-2673", "birthdate": "Mar 26, 2016", "email": "ridiculus.mus.Proin@feugiatLoremipsum.net"},
  {"name": "Sasha", "country": "Korea, South", "secret": "-0.49578209601862", "phone": "1-200-634-6630", "birthdate": "Jul 21, 2015", "email": "ante.ipsum.primis@maurisIntegersem.ca"},
  {"name": "Plato", "country": "Belize", "secret": "-0.27307854506794", "phone": "471-8481", "birthdate": "Jul 16, 2015", "email": "lobortis.ultrices@natoque.net"}
  ]
});
