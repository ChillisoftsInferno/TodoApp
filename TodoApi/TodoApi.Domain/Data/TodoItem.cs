using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApi.Domain.Data
{
    public class TodoItem
    {
        public Guid Id { get; private set; } = Guid.NewGuid();
        public string Text { get; private set; } = string.Empty;
        public bool Completed { get; private set; }
        public DateTime CreatedUtc { get; private set; } = DateTime.UtcNow;

        private TodoItem() { }

        public TodoItem(string text)
        {
            SetText(text);
        }

        public void SetText(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
                throw new ArgumentException("Text is required.", nameof(text));

            Text = text.Trim();
        }

        public void SetCompleted(bool completed) => Completed = completed;
    }
}
