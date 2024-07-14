def find_longest_length(string):
    begin = string[0]
    finish = begin
    goal = 0
    posledovatelnosti = []
    for index, value in enumerate(string):
        if value == begin:
            srez=string [goal:index]
            if len(srez) > 1:
                posledovatelnosti.append(srez)
            goal = index
            begin = value
            finish = begin
        if value != begin:
            finish= value 
        if index == len(string)-1:
            srez = string[goal:]
            posledovatelnosti.append(srez)
    razmeri_podstrok = []
    for item in posledovatelnosti:
        size = len(item)
        razmeri_podstrok.append(size)
    maximum = max(razmeri_podstrok)
    return posledovatelnosti,maximum
print(find_longest_length('qweqrtyqew'))
    

