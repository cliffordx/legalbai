icon:: 🏠 

- query-sort-by:: created-at
  query-table:: true
  query-sort-desc:: false
  query-properties:: [:page :created-at]
  #+BEGIN_QUERY
  {:title [:h2 "📚 ⑦  Daily Journal"]
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
- {{embed ((635bc75b-10e9-4e0d-b8c1-b0b98d8ba016))}}
	- *[Read more...]([[Welcome page]])*
- ---
- ## The Long Road of Jurisprudence
  id:: 645447b1-515d-4ff6-b0a7-b115dccb9ef9
	- ~~Eight vast~~ Six law subjects to conquer, 
	  Commercial, political and tax.  
	  Criminal, civil and remedial,   
	  Labor and ethics I must master.
	- Four grueling years of struggle,
	  CLEP instills skills to employ.  
	  The codal and cases to remember,  
	  As I chase this ultimate joy.
	- The bar looms ominous ahead, 
	  Four Sundays, four hours each day.  
	  Questions by the score unfold,  
	  Exams I must analyze and evaluate.
	- Twenty conundrums or more, 
	  Sub-parts to weave and assess.  
	  ~~Four~~ Two weeks of judicial marathon,  
	  Determines who will pass this test.
	- The challenges seem too many,  
	  Hardships litter the long road.  
	  But giving up is not an option,  
	  The prize is the ethics I'll uphold.
	- To serve the oppressed and marginalized,
	  Promote justice for the common good.  
	  This path I chose, I must surmount,   
	  To reap the fruits of jurisprudence.
	- The road is long, the way is hard, 
	  But the end in sight gives me cheer.  
	  To don the robes of the noble,  
	  As counsel, the goal now feels near.[^1]
		- [^1]: ^{This poem is ~~99%~~ 98% created by Generative AI and only ~~1%~~ 2% edited by Clifford Enoc. A carefully crafted prompts was made possible through **prompt engineer skills**.}
- {{embed ((635bc75b-7730-4bdb-8246-0d43c3432cd3))}}
- {{embed ((635bc75b-257f-4fc4-b4f3-8dece2332ef7))}}
- ---
- {{embed ((635bc75b-4c3b-4b8f-9d92-f58f0d227fd2))}}
	- ###### ((635b3d4a-3926-469b-8dd5-980f6f7c1721))