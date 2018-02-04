tempSet = set()

with open("FinalWordList.txt") as file:
    for line in file.readlines():
        tempSet.add(line.rstrip())


with open("FinalWordList.txt", "w") as file:
    for line in tempSet:
        file.write(line)
        file.write('\n')


