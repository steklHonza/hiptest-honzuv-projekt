Feature: Je už pátek?
    Jako uživatel
    Chci vědět jestli už je pátek
    Protože pak mohu zanechat práce a jít se bavit

  Scenario: Pátek je pátek (uid:05c9999c-d08f-4125-99a4-00c0acb5f237)
    Given dnes je pátek
    When zeptám se jestli už je pátek
    Then mělo by být řečeno "Hurááá"

  Scenario: Neděle není pátek (uid:5a73febb-2dcd-4173-b13d-276bcf69bb81)
    Given dnes je neděle
    When zeptám se jestli už je pátek
    Then mělo by být řečeno „Ne“
