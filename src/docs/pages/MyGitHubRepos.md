---
title: "GitHub's API In Excel"
date: 2019-01-22
---

# What Did You Do Today?

## Track GitHub repository or user activity in Excel.

_These queries provide public user information from [Github's API](https://api.github.com)._

<center>

# Table of Contents

| Query Name | Connection Status |
|------------|-----------------|
| [endpoint](#EndPoint) | Connection Only |
| [parameters](#Parameters) | Connection Only |
| [url](#URL) | Loaded to Data Model |
| [owner](#Owner) | Loaded to Data Model |
| [config](#Config) | Loaded to Worksheet & Data Model |
| [repos](#Repos) | Loaded to Worksheet & Data Model |
| [condition](#Condition) | Loaded to Worksheet & Data Model |

</center>

## Parameter Queries:

### Endpoint:

`"https://api.github.com/users/prp1277/" meta [IsParameterQuery=true, Type="Any", IsParameterQueryRequired=true]`

### Parameters:

`"repos" meta [IsParameterQuery=true, Type="Any", IsParameterQueryRequired=true]`

## URL [Source]

This query imports data for other queries to reference and dig through.

```less
let
    Source = Json.Document(Web.Contents(endpoint & parameters))
in
    Source
```

## Config Table

Load the table from the Excel workbook.

```less
let
    Source = Excel.CurrentWorkbook(){[Name="config"]}[Content],
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"attribute", type text}, {"value", type text}}),
    #"Transposed Table" = Table.Transpose(#"Changed Type"),
    #"Promoted Headers" = Table.PromoteHeaders(#"Transposed Table", [PromoteAllScalars=true]),
    #"Changed Type1" = Table.TransformColumnTypes(#"Promoted Headers",{{"endpoint:", type text}, {"parameter:", type text}}),
    #"Merged Columns" = Table.CombineColumns(#"Changed Type1",{"endpoint:", "parameter:"},Combiner.CombineTextByDelimiter("", QuoteStyle.None),"url")
in
    #"Merged Columns"
```

### Repos

Dependent on URL query

```less
let
    Source = URL,
    #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", {"id", "name", "owner", "description", "url", "created_at", "updated_at", "pushed_at", "size", "language", "open_issues_count", "open_issues", "default_branch"}, {"id", "name", "owner", "description", "url", "created_at", "updated_at", "pushed_at", "size", "language", "open_issues_count", "open_issues", "default_branch"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded Column1",{{"pushed_at", type datetimezone}, {"updated_at", type datetimezone}, {"created_at", type datetimezone}, {"size", Int64.Type}, {"language", type text}, {"open_issues_count", Int64.Type}, {"open_issues", Int64.Type}, {"default_branch", type text}, {"url", type text}, {"description", type text}, {"id", Int64.Type}, {"name", type text}}),
    #"Expanded owner" = Table.ExpandRecordColumn(#"Changed Type", "owner", {"login"}, {"login"}),
    #"Changed Type1" = Table.TransformColumnTypes(#"Expanded owner",{{"login", type text}}),
    #"Reordered Columns" = Table.ReorderColumns(#"Changed Type1",{"id", "name", "login", "created_at", "updated_at", "pushed_at", "size", "language", "open_issues_count", "open_issues", "default_branch", "url", "description"})
in
    #"Reordered Columns"
```

### Owner

```less
let
    Source = URL,
    #"Converted to Table" = Table.FromList(Source, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column1" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", {"id", "node_id", "name", "full_name", "private", "owner", "html_url", "description", "fork", "url", "commits_url", "created_at", "updated_at", "pushed_at", "size", "language", "open_issues_count", "open_issues", "default_branch"}, {"id", "node_id", "name", "full_name", "private", "owner", "html_url", "description", "fork", "url", "commits_url", "created_at", "updated_at", "pushed_at", "size", "language", "open_issues_count", "open_issues", "default_branch"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Expanded Column1",{{"pushed_at", type datetimezone}, {"updated_at", type datetimezone}, {"created_at", type datetimezone}, {"size", Int64.Type}, {"language", type text}, {"open_issues_count", Int64.Type}, {"open_issues", Int64.Type}, {"default_branch", type text}, {"commits_url", type text}, {"url", type text}, {"fork", type logical}, {"description", type text}, {"html_url", type text}}),
    owner1 = #"Changed Type"[owner],
    #"Converted to Table1" = Table.FromList(owner1, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Removed Duplicates" = Table.Distinct(#"Converted to Table1"),
    #"Expanded Column2" = Table.ExpandRecordColumn(#"Removed Duplicates", "Column1", {"login", "id", "node_id", "avatar_url", "gravatar_id", "url", "html_url", "followers_url", "following_url", "gists_url", "starred_url", "subscriptions_url", "organizations_url", "repos_url", "events_url", "received_events_url", "type", "site_admin"}, {"login", "id", "node_id", "avatar_url", "gravatar_id", "url", "html_url", "followers_url", "following_url", "gists_url", "starred_url", "subscriptions_url", "organizations_url", "repos_url", "events_url", "received_events_url", "type", "site_admin"}),
    #"Unpivoted Other Columns" = Table.UnpivotOtherColumns(#"Expanded Column2", {"login"}, "Attribute", "Value"),
    #"Trimmed Text" = Table.TransformColumns(Table.TransformColumnTypes(#"Unpivoted Other Columns", {{"Value", type text}}, "en-US"),{{"Attribute", Text.Trim, type text}, {"Value", Text.Trim, type text}}),
    #"Cleaned Text" = Table.TransformColumns(#"Trimmed Text",{{"Attribute", Text.Clean, type text}, {"Value", Text.Clean, type text}}),
    #"Changed Type1" = Table.TransformColumnTypes(#"Cleaned Text",{{"login", type text}})
in
    #"Changed Type1"
```

### Condition

```less
let
    Source = owner,
    #"Split Column by Delimiter" = Table.SplitColumn(Source, "Value", Splitter.SplitTextByDelimiter("{", QuoteStyle.Csv), {"Value.1", "Value.2", "Value.3"}),
    #"Changed Type" = Table.TransformColumnTypes(#"Split Column by Delimiter",{{"Value.1", type text}, {"Value.2", type text}, {"Value.3", type text}}),
    #"Replaced Value" = Table.ReplaceValue(#"Changed Type","}","",Replacer.ReplaceText,{"Value.2", "Value.3"}),
    #"Renamed Columns" = Table.RenameColumns(#"Replaced Value",{{"Value.2", "Parameter 1"}, {"Value.3", "Parameter 2"}}),
    #"Added Conditional Column" = Table.AddColumn(#"Renamed Columns", "Custom", each if [Parameter 1] <> null then [Value.1]& [Parameter 1] else [Value.1]),
    #"Removed Columns" = Table.RemoveColumns(#"Added Conditional Column",{"login", "Value.1", "Parameter 1", "Parameter 2"}),
    #"Changed Type1" = Table.TransformColumnTypes(#"Removed Columns",{{"Custom", type text}})
in
    #"Changed Type1"
```
