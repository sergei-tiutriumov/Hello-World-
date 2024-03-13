class Human:
    def __init__(self, name):
        self.name = name
    def answer_question(self, question=0):
        print("Very interesting question, I do not know!")

class Student(Human):
    def ask_question(self, someone, question): 
        self.someone = someone
        self.question = question
        print(f'{someone.name}, {question} ?')

class Mentor(Human):
    def answer_question(self, question):
        print('Derzhis, vse poluchitsya') if (question == 'I am sad...') else super().answer_question(question) 
        
    
    
    
# class CodeRewiewer(Human):
# class Curator(Human):    

chelovek = Human("Gendalf")
student1 = Student("Vasya")
mentor = Mentor('Marina')

print()
student1.ask_question(mentor, "I am sad..")
print()    
mentor.answer_question(student1.question)
#print(vars(student1))