
def getRate(title):
    counter = 0
    split = title.rstrip().split()
    for i in split:
        if i in open("wordList.txt").read():
            counter+=1
    return counter/len(split)
