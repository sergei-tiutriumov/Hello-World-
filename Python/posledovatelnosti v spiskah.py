q = [0, 1, 2, 7, 5, 6, 7]
def summary_ranges(data):
    if len(data) < 2:
        return []
    asc_progressions = []
    start = data[0] 
    end = start
    for i in range(1, len(data)):
        if data[i]==end+1:
            end=data[i]
        else:
            if start != end:
                asc_progressions.append(f'{start}->{end}')
            start = data[i]
            end = start
    if start != end:
        asc_progressions.append(f'{start}->{end}')
    return asc_progressions
print(summary_ranges(q))    