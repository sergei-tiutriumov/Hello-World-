import os 
import sys
import datetime
import tabulate
class Contact:
    def __init__(self, name, phone, address, birsthday):
        self.name = name
        self.phone = phone
        self.address = address
        self. birthday = birsthday
        print(f'The new contact {name} created')
    def show_contact(self):
        attr = vars(self)
        for key, value in attr.items():
            print(f'{key}:{value}')
        
leo = Contact("Tolstoy", "+7-999-11-22-33", "Yasnaya polyana", "01.101.1980")




    


