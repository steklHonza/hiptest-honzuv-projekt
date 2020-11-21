Feature: uz je patek?


  Scenario: dnes je patek (uid:75a5d9dc-0aa9-4b6f-9844-9559d38ee5e5)
    Given dnes je "patek"
    When zeptam se zda uz je "patek"
    Then je receno "huraaa"

  Scenario: dnes je nedele (uid:b3ed1b53-df42-4506-958b-cdbea6d4b3d2)
    Given dnes je "nedele"
    When zeptam se zda uz je "patek"
    Then je receno "ne"
