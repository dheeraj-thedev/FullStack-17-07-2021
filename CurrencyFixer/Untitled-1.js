<script>
    // We need handle click on save currency 
    // on that handle we need to read all selected options 
    // and we nedd to update icons based on user selection
    // change the currency Name as well 
    // change the language icons
    
    var btnChange = document.getElementById("btn-change");
    btnChange.onclick= function(e){
        var currency = document.getElementById('select-currency')
    var country=document.getElementById('select-country')
    var language=document.getElementById('select-language')
    var currencyLabel = document.getElementById('currency-btn-label')
    // alert(country.options[country.selectedIndex].text);
    // alert(currency.options[currency.selectedIndex].text);
    // alert(language.options[language.selectedIndex].text);
    currencyLabel.innerText= currency.options[currency.selectedIndex].text
    
    var mapCountryConfig={
        "INDIA":"flag-icon-ad",
        "JAPAN": "flag-icon-ae",
        "CHINA": "flag-icon-am", 
        "US": "flag-icon-ao US",
        "RUSSIA": "flag-icon-ar"
    }
    //alert(country.options[country.selectedIndex].text)
    document.getElementById("span-flag").classList.remove(document.getElementById("span-flag").className);
    document.getElementById("span-flag").classList.add(mapCountryConfig[country.options[country.selectedIndex].text])
    
    // we want to get an icon for currency 
    
    // we want to get an icon for the language 
    
    
    }
    
    
    </script>
    