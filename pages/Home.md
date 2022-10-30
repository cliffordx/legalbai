icon:: 

- {{embed ((635bc75b-10e9-4e0d-b8c1-b0b98d8ba016))}}
	- *[Read more...]([[Welcome page]])*
- #  📚 **Journals** (past 7 days)
	- query-table:: true
	  #+BEGIN_QUERY
	  {:title " 📚 ⑦ 一 Past 7 days"
	   :query [:find (pull ?p [*])
	           :in $ ?d
	           :where
	           [?p :block/journal? true]
	           [?p :block/journal-day ?d]]
	   :inputs [:7d-before :today]
	  }
	  #+END_QUERY
- ---
- {{embed ((635bc75b-7730-4bdb-8246-0d43c3432cd3))}}
- ---
- {{embed ((635bc75b-4c3b-4b8f-9d92-f58f0d227fd2))}}
	- ###### ((635b3d4a-3926-469b-8dd5-980f6f7c1721))