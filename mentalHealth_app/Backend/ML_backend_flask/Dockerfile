FROM python:3.9-slim
RUN apt-get update \
&& apt-get install -y --no-install-recommends git \
&& apt-get purge -y --auto-remove \
&& rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install spacy
RUN python -m spacy download en_core_web_sm
RUN pip install git+https://github.com/laxmimerit/preprocess_kgptalkie.git --upgrade --force-reinstall
EXPOSE 5000
CMD ["python", "predictor.py"]
