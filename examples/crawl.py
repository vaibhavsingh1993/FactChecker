import json
import requests
from bs4 import BeautifulSoup


def request_url_http(url):
    """HTTP request to get the HTML of the specified URL"""
    r = requests.get(url)
    r.encoding = 'utf-8'
    html = r.text
    return html


def get_soup(url):
    """Create a soup from URL"""
    html = request_url_http(url)
    soup = BeautifulSoup(html, "lxml")
    return soup



if __name__ == '__main__':
    """ STEP 1: Download all posts from page list """
    soup = get_soup("https://www.goodreads.com/quotes")
    print(soup)
