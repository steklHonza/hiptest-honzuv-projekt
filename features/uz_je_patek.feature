Feature: uz je patek?


  Scenario: je patek (uid:ef703096-cd01-4c2d-aa5b-10c5b2a1d787)
    Given je "patek"
    When zeptam se zda je patek
    Then je receno "huraaa"
