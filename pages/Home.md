icon:: ο

- {{embed ((635bc75b-10e9-4e0d-b8c1-b0b98d8ba016))}}
	- *[Read more...]([[Welcome page]])*
- query-table:: true
  query-properties:: [:page :created-at]
  query-sort-by:: created-at
  query-sort-desc:: true
  #+BEGIN_QUERY
  {:title " π β¦  Journals δΈ Past 7 days"
  :query [:find (pull ?page [*])
  :in $ ?startdate ?enddate
  :where
  [?block :block/content ?blockcontent]
  [?block :block/page ?page]
  [?page :block/name ?pagename]
  [?page :block/journal? true]
  [?page :block/journal-day ?journaldate]
  [(>= ?journaldate ?startdate)]
  [(<= ?journaldate ?enddate)]
  ]
  :result-transform (fn [result]
                    (sort-by (fn [d]) result))
  :inputs [:7d-before :today]
  :breadcrumb-show? true
  }
  #+END_QUERY
- ---
- {{embed ((635bc75b-7730-4bdb-8246-0d43c3432cd3))}}
- {{embed ((635bc75b-257f-4fc4-b4f3-8dece2332ef7))}}
- ---
- {{embed ((635bc75b-4c3b-4b8f-9d92-f58f0d227fd2))}}
	- ###### ((635b3d4a-3926-469b-8dd5-980f6f7c1721))