function score(input) {
	var all_words = input.trim().match(/\b(\w+)\b/g)
	
	var sentence_count =  input.trim().match(/[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi).length;
	var word_count = all_words.length;
	var difficult_word_count = 0
	var difficult_word_ratio = difficult_word_count / word_count
	var score= 15.79*difficult_word_ratio + 0.0496*word_count/sentence_count
	
	return score
}

var str = "This is a test. test test test yesss";
alert(score(str));
