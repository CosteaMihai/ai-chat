from textstat import textstat


def analyse_text(text: str):
    stats = []
    deltas = []

    stats.append(textstat.flesch_kincaid_grade(text))
    stats.append(textstat.gunning_fog(text))
    stats.append(textstat.dale_chall_readability_score(text))
    stats.append(textstat.automated_readability_index(text))
    stats.append(textstat.coleman_liau_index(text))

    stats_average = round(sum(stats) / len(stats), 2)

    for item in stats:
        abs_delta = abs(item - stats_average)
        deltas.append(round(abs_delta, 2))

    deltas_average = round(sum(deltas) / len(deltas), 2)
    
    analysis = {
        'stats_average': stats_average,
        'certainty': '',
    }

    print(text)
    print(deltas_average, deltas, stats, stats_average)

    if deltas_average <= 2:
        analysis['certainty'] = 'certain'
    elif deltas_average > 2 and deltas_average < 4:
        analysis['certainty'] = decide_by_stats_majority(stats, stats_average, deltas_average)
    else:
        analysis['certainty'] = 'uncertain'

    return determine_complexity(analysis)


def decide_by_stats_majority(stats: list, stats_average: float, deltas_average: float): 
    stats_delta_majority = []

    for stats_value in stats:
        abs_stat = abs(stats_value - stats_average)
        stats_delta_majority.append(round(abs_stat, 2))

        stats_delta_majority_result = [item for item in stats_delta_majority if item <= deltas_average]

    return 'certain' if len(stats_delta_majority_result) > 2 else 'uncertain'

        
def determine_complexity(analysis: dict):
    if analysis['certainty'] == 'certain':
        return 'complex' if analysis['stats_average'] > 8 else 'simple'
    
    if analysis['certainty'] == 'uncertain':
        return 'complex' if analysis['stats_average'] > 5 else 'simple'



test_array = [
    'Page replacement algorithms: clock',
    "You can't code under Pressure",
    'Gigits programming problem',
    'Greedy thief programming problem in JS',
    'how can I add 2 numbers in python',
    'implement a red black tree in C programming language',
    'Halting Problem in Javascript',
    'how can I display a sting in Javascript console',
    'How can I display a div inside a span having a class of db-grid',
    'How can I achive memoization in react',
    'The function should take three arguments - operation(string/char), value1(number), value2(number).',
    'Create a function that will return a regular expression string that is capable of evaluating binary strings (which consist of only 1s and 0s) and determining whether the given string represents a number divisible by n.',
    'Regular Expression for Binary Numbers Divisible by n',
    'Can you reverse a liked list in C++ programming language',
    'Can you find the index of a certain element in an array JavaScript',
    'Regular expression parser in python',
    'Regular transpiler in python',
    'Loopover problem in C++',
    'Game of life in reverse programming problem in C++',
    'Express number as sum of four squares in Javascript',
    'Programming problem Return a List of moves that will transform the unsolved grid into the solved one. All values of the scrambled and unscrambled grids will be unique! Moves will be 2 character long Strings like the ones below.'
    'Programming problem Binary multiple of 3'
    "The first input array is the key to the correct answers to an exam, like ['a', 'a', 'b', 'd]. The second one contains a student's submitted answers.The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).If the score < 0, return 0."
]