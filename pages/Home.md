icon:: 🏠

- query-table:: false
  #+BEGIN_QUERY
  {:title [:h2 "Latest Entries"]
   :query [:find (pull ?b [*])
           :in $ ?startdate ?enddate
           :where
           [?b :block/journal-day ?journaldate]
  ;[?page :block/journal-day ?journaldate]
  [(>= ?journaldate ?startdate)]
  [(<= ?journaldate ?enddate)]
           ]
   :inputs [:7d-before :today]
   :result-transform (fn [result]
                       (sort-by (fn [b]
                                  (get b :block/updated-at))
                                result))
   :collapsed? false
   :breadcrumb-show? true
  }
  #+END_QUERY
- query-sort-by:: page
  query-table:: true
  query-sort-desc:: true
  query-properties:: [:page :updated-at]
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
- ## [The Long Road of Jurisprudence](https://x.com/i/grok/share/hPwEsh708VsLGTbUAdcZ9LzSj)
  id:: 645447b1-515d-4ff6-b0a7-b115dccb9ef9
	- <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2066791348&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/cliffordx" title="cliffordx" target="_blank" style="color: #cccccc; text-decoration: none;">cliffordx</a> · <a href="https://soundcloud.com/cliffordx/the-long-road-of-jurisprudence" title="The Long Road of Jurisprudence (1)" target="_blank" style="color: #cccccc; text-decoration: none;">The Long Road of Jurisprudence (1)</a></div>
	- ~~Eight vast~~ Six law subjects to conquer, 
	  Commercial, political and tax.  
	  Criminal, civil and remedial,   
	  Labor and ethics I must master.
	- Four grueling years of struggle,
	  CLEP instills skills to employ.  
	  The codal and cases to remember,  
	  As I chase this ultimate joy.
	- The bar looms ominous ahead, 
	  Three days, eight hours each day.  
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
		- [^1]: ^{This poem is ~~99%~~ 98% created by Generative AI and only ~~1%~~ 2% edited by Clifford Enoc. A carefully crafted prompts was made possible through **prompt engineering skills**.}
		- ^{Updated: *[Sunday, March 30, 2025; 21:35:09]*}
- {{embed ((635bc75b-7730-4bdb-8246-0d43c3432cd3))}}
- {{embed ((635bc75b-257f-4fc4-b4f3-8dece2332ef7))}}
- ---
- {{embed ((635bc75b-4c3b-4b8f-9d92-f58f0d227fd2))}}
	- ###### ((635b3d4a-3926-469b-8dd5-980f6f7c1721))