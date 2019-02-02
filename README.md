"# castormango19"

::::::::::::Tables::::::::::::
Bracket:::::::::::::::::::::::
    round #     - 2^n where n of total tuples
    Match #     - from 0 -> 2^n where n is the total rounds minus the current round
    Player      - contains many players, but should be restricted to holding a tuple of players
Player::::::::::::::::::::::::
    username    - name for player (if anything other than full name)
    fname       - first name
    lname       - last name
    wins #      - number of total wins in a given tournament
    lost (bool) - basically the "still in / out " value of a tournament
    Bracket     - contains many brackets, can be treated as a stack and traced from the start position
Tournament::::::::::::::::::::
    players #           - number of total players (can / should be replaced by relation of Player entites)
    groups              - number of total groups in a given tournament ( (int)players / 2 )
    passes              - number of passes in the tournament ( should only be first round due to odd count - ( players % 2 ) )
    min_bracket_size    - number of largest 2^n bracket size needed in order to fill ( ceiling( log2(players) ) )
Characters:::::::::::::::::::
    name        - name of character, to be used as primary key
    image       - small headshot of character (stock counter image)
    image_full  - to be used later in the vs. screen as the selected character for the match