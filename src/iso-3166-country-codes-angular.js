'use strict';

angular.module('iso-3166-country-codes', [])
  .factory('ISO3166', function() {
    var holder = {};

    holder.codeToCountry = {
      'AFG': 'Afghanistan',
      'ALB': 'Albania',
      'DZA': 'Algeria',
      'ASM': 'American Samoa',
      'AND': 'Andorra',
      'AGO': 'Angola',
      'AIA': 'Anguilla',
      'ATA': 'Antarctica',
      'ATG': 'Antigua and Barbuda',
      'ARG': 'Argentina',
      'ARM': 'Armenia',
      'ABW': 'Aruba',
      'AUS': 'Australia',
      'AUT': 'Austria',
      'AZE': 'Azerbaijan',
      'BHR': 'Bahrain',
      'BGD': 'Bangladesh',
      'BRB': 'Barbados',
      'BLR': 'Belarus',
      'BEL': 'Belgium',
      'BLZ': 'Belize',
      'BEN': 'Benin',
      'BMU': 'Bermuda',
      'BTN': 'Bhutan',
      'BOL': 'Bolivia (Plurinational State of)',
      'BIH': 'Bosnia and Herzegovina',
      'BWA': 'Botswana',
      'BVT': 'Bouvet Island',
      'BRA': 'Brazil',
      'IOT': 'British Indian Ocean Territory',
      'VGB': 'Virgin Islands (British)',
      'BRN': 'Brunei Darussalam',
      'BGR': 'Bulgaria',
      'BFA': 'Burkina Faso',
      'BDI': 'Burundi',
      'KHM': 'Cambodia',
      'CMR': 'Cameroon',
      'CAN': 'Canada',
      'CPV': 'Cabo Verde',
      'BES': 'Bonaire, Sint Eustatius and Saba',
      'CYM': 'Cayman Islands',
      'CAF': 'Central African Republic',
      'TCD': 'Chad',
      'CHL': 'Chile',
      'CHN': 'China',
      'CXR': 'Christmas Island',
      'CCK': 'Cocos (Keeling) Islands',
      'MAF': 'Saint Martin (French part)',
      'COL': 'Colombia',
      'COM': 'Comoros',
      'COK': 'Cook Islands',
      'CRI': 'Costa Rica',
      'HRV': 'Croatia',
      'CUB': 'Cuba',
      'CUW': 'Curaçao',
      'CYP': 'Cyprus',
      'CZE': 'Czechia',
      'COD': 'Congo (Democratic Republic of the)',
      'DNK': 'Denmark',
      'DJI': 'Djibouti',
      'DMA': 'Dominica',
      'DOM': 'Dominican Republic',
      'TLS': 'Timor-Leste',
      'ECU': 'Ecuador',
      'EGY': 'Egypt',
      'SLV': 'El Salvador',
      'GNQ': 'Equatorial Guinea',
      'ERI': 'Eritrea',
      'EST': 'Estonia',
      'ETH': 'Ethiopia',
      'FLK': 'Falkland Islands (Malvinas)',
      'FRO': 'Faroe Islands',
      'FSM': 'Micronesia (Federated States of)',
      'FJI': 'Fiji',
      'FIN': 'Finland',
      'FRA': 'France',
      'GUF': 'French Guiana',
      'PYF': 'French Polynesia',
      'ATF': 'French Southern Territories',
      'GAB': 'Gabon',
      'GEO': 'Georgia',
      'DEU': 'Germany',
      'GHA': 'Ghana',
      'GIB': 'Gibraltar',
      'GRC': 'Greece',
      'GRL': 'Greenland',
      'GRD': 'Grenada',
      'GLP': 'Guadeloupe',
      'GUM': 'Guam',
      'GTM': 'Guatemala',
      'GGY': 'Guernsey',
      'GIN': 'Guinea',
      'GNB': 'Guinea-Bissau',
      'GUY': 'Guyana',
      'HTI': 'Haiti',
      'HMD': 'Heard Island and McDonald Islands',
      'HND': 'Honduras',
      'HKG': 'Hong Kong',
      'HUN': 'Hungary',
      'ISL': 'Iceland',
      'IND': 'India',
      'IDN': 'Indonesia',
      'IRN': 'Iran (Islamic Republic of)',
      'IRQ': 'Iraq',
      'IMN': 'Isle of Man',
      'ISR': 'Israel',
      'ITA': 'Italy',
      'CIV': 'Côte d\'Ivoire',
      'JAM': 'Jamaica',
      'JPN': 'Japan',
      'JEY': 'Jersey',
      'JOR': 'Jordan',
      'KAZ': 'Kazakhstan',
      'KEN': 'Kenya',
      'KIR': 'Kiribati',
      'KWT': 'Kuwait',
      'KGZ': 'Kyrgyzstan',
      'LAO': 'Lao People\'s Democratic Republic',
      'LVA': 'Latvia',
      'LBN': 'Lebanon',
      'LSO': 'Lesotho',
      'LBR': 'Liberia',
      'LBY': 'Libya',
      'LIE': 'Liechtenstein',
      'LTU': 'Lithuania',
      'LUX': 'Luxembourg',
      'MAC': 'Macao',
      'MDG': 'Madagascar',
      'MWI': 'Malawi',
      'MYS': 'Malaysia',
      'MDV': 'Maldives',
      'MLI': 'Mali',
      'MLT': 'Malta',
      'MHL': 'Marshall Islands',
      'MTQ': 'Martinique',
      'MRT': 'Mauritania',
      'MUS': 'Mauritius',
      'MYT': 'Mayotte',
      'MEX': 'Mexico',
      'MDA': 'Moldova (Republic of)',
      'MCO': 'Monaco',
      'MNG': 'Mongolia',
      'MNE': 'Montenegro',
      'MSR': 'Montserrat',
      'MAR': 'Morocco',
      'MOZ': 'Mozambique',
      'MMR': 'Myanmar',
      'NAM': 'Namibia',
      'NRU': 'Nauru',
      'NPL': 'Nepal',
      'NLD': 'Netherlands',
      'NCL': 'New Caledonia',
      'NZL': 'New Zealand',
      'NIC': 'Nicaragua',
      'NER': 'Niger',
      'NGA': 'Nigeria',
      'NIU': 'Niue',
      'NFK': 'Norfolk Island',
      'PRK': 'Korea (Democratic People\'s Republic of)',
      'MNP': 'Northern Mariana Islands',
      'NOR': 'Norway',
      'OMN': 'Oman',
      'PAK': 'Pakistan',
      'PLW': 'Palau',
      'PAN': 'Panama',
      'PNG': 'Papua New Guinea',
      'PRY': 'Paraguay',
      'PER': 'Peru',
      'PHL': 'Philippines',
      'PCN': 'Pitcairn',
      'POL': 'Poland',
      'PRT': 'Portugal',
      'PRI': 'Puerto Rico',
      'QAT': 'Qatar',
      'IRL': 'Ireland',
      'MKD': 'Macedonia (the former Yugoslav Republic of)',
      'COG': 'Congo',
      'ROU': 'Romania',
      'RUS': 'Russian Federation',
      'RWA': 'Rwanda',
      'REU': 'Réunion',
      'BLM': 'Saint Barthélemy',
      'SHN': 'Saint Helena, Ascension and Tristan da Cunha',
      'KNA': 'Saint Kitts and Nevis',
      'LCA': 'Saint Lucia',
      'SPM': 'Saint Pierre and Miquelon',
      'VCT': 'Saint Vincent and the Grenadines',
      'WSM': 'Samoa',
      'SMR': 'San Marino',
      'SAU': 'Saudi Arabia',
      'SEN': 'Senegal',
      'SRB': 'Serbia',
      'SYC': 'Seychelles',
      'SLE': 'Sierra Leone',
      'SGP': 'Singapore',
      'SXM': 'Sint Maarten (Dutch part)',
      'SVK': 'Slovakia',
      'SVN': 'Slovenia',
      'SLB': 'Solomon Islands',
      'SOM': 'Somalia',
      'ZAF': 'South Africa',
      'SGS': 'South Georgia and the South Sandwich Islands',
      'KOR': 'Korea (Republic of)',
      'SSD': 'South Sudan',
      'ESP': 'Spain',
      'LKA': 'Sri Lanka',
      'PSE': 'Palestine, State of',
      'SDN': 'Sudan',
      'SUR': 'Suriname',
      'SJM': 'Svalbard and Jan Mayen',
      'SWZ': 'Swaziland',
      'SWE': 'Sweden',
      'CHE': 'Switzerland',
      'SYR': 'Syrian Arab Republic',
      'STP': 'Sao Tome and Principe',
      'TWN': 'Taiwan, Province of China[a]',
      'TJK': 'Tajikistan',
      'TZA': 'Tanzania, United Republic of',
      'THA': 'Thailand',
      'BHS': 'Bahamas',
      'GMB': 'Gambia',
      'TGO': 'Togo',
      'TKL': 'Tokelau',
      'TON': 'Tonga',
      'TTO': 'Trinidad and Tobago',
      'TUN': 'Tunisia',
      'TUR': 'Turkey',
      'TKM': 'Turkmenistan',
      'TCA': 'Turks and Caicos Islands',
      'TUV': 'Tuvalu',
      'UGA': 'Uganda',
      'UKR': 'Ukraine',
      'ARE': 'United Arab Emirates',
      'GBR': 'United Kingdom of Great Britain and Northern Ireland',
      'UMI': 'United States Minor Outlying Islands',
      'USA': 'United States of America',
      'VIR': 'Virgin Islands (U.S.)',
      'URY': 'Uruguay',
      'UZB': 'Uzbekistan',
      'VUT': 'Vanuatu',
      'VAT': 'Holy See',
      'VEN': 'Venezuela (Bolivarian Republic of)',
      'VNM': 'Viet Nam',
      'WLF': 'Wallis and Futuna',
      'ESH': 'Western Sahara',
      'YEM': 'Yemen',
      'ZMB': 'Zambia',
      'ZWE': 'Zimbabwe',
      'ALA': 'Åland Islands'
    };


    holder.countryToCode = {};
    holder.countryCodes = [];

    for(var key in holder.codeToCountry) {
      holder.countryToCode[holder.codeToCountry[key].toUpperCase()] = key;
      holder.countryCodes.push(key);
    }

    holder.isCountryCode = function(input) {
      if (angular.isString(input)) {
        input = input.toUpperCase();
      }
      return angular.isDefined(this.codeToCountry[input]);
    };

    holder.getCountryCode = function(countryName, manipulator) {
      var countryCode = this.countryToCode[countryName.toUpperCase()];
      manipulator = manipulator ? manipulator : 'toUpperCase';

      return countryCode && countryCode[manipulator]();
    };

    holder.getCountryName = function(countryCode, manipulator) {
      manipulator = manipulator ? manipulator : 'toString';

      return this.codeToCountry[countryCode] && this.codeToCountry[countryCode][manipulator]();
    };

    holder.getCountryNames = function(countryCodes, manipulator) {
      manipulator = manipulator ? manipulator : 'toString';

      var countries = {};
      angular.forEach(countryCodes, function(key) {
        if (holder.isCountryCode(key)) {
          countries[key] = holder.getCountryName(key, manipulator);
        }
      });
      return countries;
    };

    return holder;
  })
  .filter('isoCountry', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryName(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .filter('isoCountryCode', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryCode(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .directive('countryCode', ['ISO3166', function(ISO3166) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if(ISO3166.isCountryCode(viewValue)) {
            ctrl.$setValidity('countrycode', true);
            return viewValue;
          } else {
            ctrl.$setValidity('countrycode', false);
            return undefined;
          }
        });
      }
    };
  }]);
