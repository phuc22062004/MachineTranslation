from transformers import T5ForConditionalGeneration, T5Tokenizer
import torch

# model_path = "model/my_t5_translation_model.pt"
model = 'phuc22062004/finetune_t5'
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

tokenizer = T5Tokenizer.from_pretrained(model)
model = T5ForConditionalGeneration.from_pretrained(model)


model.to(device)
model.eval()

def translate_text(source_text):
    prefixed = "translate English to Vietnamese: " + source_text
    inputs = tokenizer(prefixed, return_tensors="pt", max_length=128, truncation=True).to(device)

    with torch.no_grad():
        outputs = model.generate(
            input_ids=inputs["input_ids"],
            attention_mask=inputs["attention_mask"],
            max_length=128,
            num_beams=4,     
            early_stopping=True
        )

    translated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return translated_text
