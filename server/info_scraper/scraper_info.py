import pandas as pd
import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import time


# element = driver.find_element(By.XPATH, "//table/tbody/tr/td")
# https://stackoverflow.com/questions/69875125/find-element-by-commands-are-deprecated-in-selenium

# Method to extract the updates of the webpage
def get_Link_Titles(soup):
    links = soup.findAll('a', {'target': '_blank'})
    
    for link in links:
        titles = link.get('title')
    
    return titles

# Method to extract the full table for the period
def get_Table(soup, driver):
    
    soup_table = soup.find_all("table")
    tables = pd.read_html(str(soup_table))
    # table = pd.read_html(driver.page_source)[5]

    return tables

def main ():   

    year = 2022
    month = 12
    
    driver = webdriver.Chrome()
    webpage = "https://www.checkee.info/main.php?dispdate=" + str(year) + "-" + str(month)
    
    driver.get(webpage)
    time.sleep(5)
    
    soup = BeautifulSoup(driver.page_source)

    table = get_Table(soup)
    print(table)
    titles = get_Link_Titles(soup, driver)
    print(titles)

main()



