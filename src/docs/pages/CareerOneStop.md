---
title: "Get & Transform (A Job)"
date: "2019-01-29"
---

# Using Excel to Aggregate Job Postings

> Helpful Links

<center>

| Subject | Link |
|:--------:|:-------:|
| Parameter Queries | [Ken Puls](https://www.excelguru.ca/blog/2014/11/26/building-a-parameter-table-for-power-query/) |
| Authorization | [Chris Webb](https://blog.crossjoin.co.uk/2014/03/26/working-with-web-services-in-power-query/) |
| Api Used | [CareerOneStop](https://api.careeronestop.org) |
| Json Placeholder | [Dummy Data](https://jsonplaceholder.typicode.com/comments)

</center>

## Identifying Our Source

From the CareerOneStop API [Documentation]():

```http
https://api.careeronestop.org/v1/jobsearch/{userId}/{keyword}/{location}/{radius}/{sortColumns}/{sortOrder}/{startRecord}/{pageSize}/{days}?source={searchProvider}&showFilters={boolean}
```

Looking at the url, we can make a few assumptions.

### 1. Dynamic Items

Values that will change depending on our search.

**`{keyword}` & `{searchProvider}`**

The keyword is just the job title and the search providers are listed below - there are four options to choose from:

| Code | Provider | Description |
|:------:|:--------:|:-----------:|
| IN | [Indeed](http://www.indeed.com/) | Well-Known Job Bank |
| CB | [CareerBuilder](https://www.careerbuilder.com/) | Another relatively well-known job bank |
| NLx | [National Labor Exchange](https://usnlx.com/index.asp) | Government sponsored job bank |
| AJE | [America's Job Exchange](https://www.americasjobexchange.com/) | Another government-sponsored job bank aimed towards veterans and disabled persons |

### 2. Static Items

Things that won't change between requests - AKA Everything else.

## Test the Connection

There's no need to get ahead of ourselves here - setting this up right will save more time in the long run. Use the ribbon and click **Data > Get & Transform > From Web**.
> Keyboard shortcut: Alt, A, FW

Paste the url into the 
