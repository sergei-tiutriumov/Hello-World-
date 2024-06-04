def first_method():
    a = [1,2,3,4]
    b = a[:]
    b.insert(0,0)
    a.insert(len(a)+1,0)
    c = []
    j = 0
    while j < len(a):
        c.append(a[j]+b[j])
        j+=1
 #   print(a)
 #   print(b)
    print(c,'\n')
    
def second_method(a):
#    a = [1,2,3,4]
    a.insert(0,0)
    b = []
    j = 0 
    for i in a:
        if j < len(a)-1:
            b.append(a[j]+a[j+1])
            j+=1
        else:
            b.append(a[j])
 #   print(a)
    return(b)
k = [1,2,3,4]

def paskal_triangle(n):
    line = [1]
    i = 0 
    while  i < n:
        line = second_method(line)
        i+=1
    return line

print(paskal_triangle(4))

        
        
    